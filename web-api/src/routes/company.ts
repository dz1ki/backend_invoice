import * as express from "express";
import CompanyController from "../controllers/company";

export const companies: express.IRouter = express.Router();
companies.get("/companies", CompanyController.list);
