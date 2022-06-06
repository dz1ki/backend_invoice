import * as express from "express";
import LogController from "../controllers/logs";

export const logs: express.IRouter = express.Router();
logs.get("/logs", LogController.list);
