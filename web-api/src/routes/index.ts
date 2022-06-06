import * as express from "express";
import { clients } from "./clients";
import { companies } from "./company";
import { invoices } from "./invoices";
import { logs } from "./logs";

export const router: express.IRouter = express.Router();

router.use("/", invoices);
router.use("/", clients);
router.use("/", companies);
router.use("/", logs);
