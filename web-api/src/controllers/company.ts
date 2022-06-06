import { Request, Response } from "express";
import CompanyService from "../service/company";
class CompanyController {
  async list(request: Request, response: Response) {
    try {
      const company = await CompanyService.list();
      return response.status(200).json(company);
    } catch (e) {
      console.log(e);
      response.status(500).json({ message: e.message || "Server error" });
    }
  }
}
export default new CompanyController();
