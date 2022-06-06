import { swCompanies } from "./companies";
import { swLogs } from "./logs";
import { swClients } from "./clients";
import { swInvoices } from "./invoices";

const swagger: object = {
  openapi: "3.0.0",
  info: {
    title: "Invoices",
    version: "1.0.0",
    description: "Service for generating invoices",
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "Development server",
    },
  ],
  paths: {
    ...swInvoices,
    ...swClients,
    ...swCompanies,
    ...swLogs,
  },
};

export default swagger;
