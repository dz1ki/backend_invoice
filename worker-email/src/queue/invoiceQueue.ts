import { Queue, QueueEvents } from "bullmq";
import * as config from "config";

const connection = {
  host: config.get("redisConfig.host"),
  port: config.get("redisConfig.port"),
  password: config.get("redisConfig.password"),
};
export const invoiceQueue = new Queue("Invoice", { connection });
export const queueEvents = new QueueEvents("Invoice", { connection });
