import { Job } from "bullmq";
import { RequestEmail, OwnerInfo, JobName } from "./interfaces";
import { sendFileToEmailJob } from "./jobs/sendFile";
import { invoiceQueue, queueEvents } from "./queue/invoiceQueue";

const startWorker = () => {
  try {
    queueEvents.on("completed", async ({ jobId }) => {
      const job = await Job.fromId(invoiceQueue, jobId);
      if (job.name === JobName.GenerateAndSendInvoice) {
        const { email, firstName }: OwnerInfo = job.data.ownerInfo;
        const { sendEmail, clientEmail }: RequestEmail = job.data.objectForPDF;
        sendFileToEmailJob(
          sendEmail,
          clientEmail,
          firstName,
          email,
          job.returnvalue
        );
      }
    });
  } catch (error) {
    console.log("Email worker error", error);
  }
};
startWorker();
