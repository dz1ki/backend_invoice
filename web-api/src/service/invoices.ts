import { Company } from "../models/company";
import { Client } from "../models/client";
import { v4 as uuidv4 } from "uuid";
import { Log } from "../models/log";
import { JobName, ObjectForPDF, Task } from "../interfaces";
import { ownerInfo } from "../data/constants";
import { invoiceQueue } from "../queue/invoiceQueue";

class InvoiceService {
  getSumm(completedTasks: any[]) {
    return completedTasks.reduce((accum: any, element: { cost: any }) => {
      accum = element.cost + accum;
      return accum;
    }, 0);
  }
  getFormatedDate() {
    const dateNow: Date = new Date();
    return (
      dateNow.getDate() +
      "." +
      ("0" + (dateNow.getMonth() + 1)) +
      "." +
      dateNow.getFullYear()
    );
  }
  async generate(clientEmail: string, completedTasks: Task[], sendEmail: any) {
    const invoiceId: string = uuidv4();
    const client: Client = await Client.findOne({
      where: { email: clientEmail },
      include: [
        {
          model: Company,
          attributes: ["name", "address", "scope"],
          required: false,
          as: "Company",
        },
      ],
    });
    if (!client) {
      await Log.create({ email: clientEmail, successfully: false });
      throw { message: "Invalid email" };
    }
    const { firstName, lastName }: Client = client;
    const { name, address, scope }: Company = client.Company;
    const summCost = this.getSumm(completedTasks);
    const dateFormatDDMMYYYY = this.getFormatedDate();
    await Log.create({
      email: clientEmail,
      firstName,
      lastName,
      successfully: true,
      company: name,
      invoiceId,
    });
    const objectForPDF: ObjectForPDF = {
      sendEmail,
      clientEmail,
      name,
      address,
      scope,
      firstName,
      lastName,
      summCost,
      completedTasks,
      dateFormatDDMMYYYY,
      invoiceId,
    };

    invoiceQueue.add(JobName.GenerateAndSendInvoice, {
      objectForPDF,
      ownerInfo,
    });
  }
}
export default new InvoiceService();
