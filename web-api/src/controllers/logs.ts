import { Request, Response } from "express";
import LogService from "../service/logs";
class LogController {
  async list(request: Request, response: Response) {
    try {
      const log = await LogService.list();
      return response.status(200).json(log);
    } catch (e) {
      console.log(e);
      response.status(500).send({ message: e.message || "Server error" });
    }
  }
}
export default new LogController();
