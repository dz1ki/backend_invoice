import * as express from "express";
import ClientController from "../controllers/clients";

export const clients: express.IRouter = express.Router();
clients.get("/clients", ClientController.list);
