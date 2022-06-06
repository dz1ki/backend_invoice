import InvoiceService from "../service/invoices";
import { InvoiceRequest } from "../interfaces";
import { Request, Response } from "express";

class InvoiceController {
  async generate(request: Request, response: Response) {
    try {
      const { sendEmail } = request.query;
      const { email, completedTasks }: InvoiceRequest = request.body;
      await InvoiceService.generate(email, completedTasks, sendEmail);
      response.json(`Invoice sent by mail: ${sendEmail || email}`);
    } catch (e) {
      response.status(500).send({ message: e.message || "Server error" });
    }
  }
}
export default new InvoiceController();
