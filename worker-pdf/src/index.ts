import { generateInvoiceJob } from "./jobs/generateInvoice";
import { Worker } from "bullmq";
import * as config from "config";
import { JobName } from "./interfaces";

const startWorker = () => {
  try {
    const worker = new Worker(
      "Invoice",
      async (job) => {
        if (job.name === JobName.GenerateAndSendInvoice) {
          return generateInvoiceJob(job.data.objectForPDF, job.data.ownerInfo);
        }
      },
      {
        connection: {
          host: config.get("redisConfig.host"),
          port: config.get("redisConfig.port"),
          password: config.get("redisConfig.password"),
        },
      }
    );
    worker.on("completed", async (job) => {
      console.log(`Job ${job.name} (id: ${job.id}) has completed!`);
    });
    worker.on("failed", (job, err) => {
      console.log(
        `Job ${job.name} (id: ${job.id}) has failed with ${err.message}`
      );
    });
  } catch (error) {
    console.log("Pdf worker error", error);
  }
};
startWorker();
