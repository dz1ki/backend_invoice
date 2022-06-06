import { Request, Response } from "express";
import ClientsService from "../service/clients";
class ClientsController {
  async list(request: Request, response: Response) {
    try {
      const client = await ClientsService.list();
      return response.status(200).json(client);
    } catch (e) {
      console.log(e);
      response.status(500).send({ message: e.message || "Server error" });
    }
  }
}
export default new ClientsController();
