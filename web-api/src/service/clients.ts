import { Client } from "../models/client";
class ClientsService {
  async list(): Promise<Client[]> {
    const client: Client[] = await Client.findAll();
    return client;
  }
}
export default new ClientsService();
