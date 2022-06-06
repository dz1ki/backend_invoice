export interface OwnerInfo {
  firstName: string;
  email: string;
}

export interface RequestEmail {
  sendEmail: string;
  clientEmail: string;
}
export enum JobName {
  GenerateAndSendInvoice = "generateAndSendInvoice",
}
