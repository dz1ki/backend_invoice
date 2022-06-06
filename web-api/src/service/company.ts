import { Company } from "../models/company";
class CompanyService {
  async list(): Promise<Company[]> {
    const company: Company[] = await Company.findAll();
    return company;
  }
}
export default new CompanyService();
