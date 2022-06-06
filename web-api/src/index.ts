import * as express from "express";
import { sequelize } from "./models";
import * as config from "config";
import { router } from "./routes/index";
import * as swaggerUI from "swagger-ui-express";
import swagger from "./docs";

const port: number = config.get("app.port") || 5000;
const app: express.Application = express();
app.use(express.json());
router.use("/api-docs", swaggerUI.serve);
router.get("/api-docs", swaggerUI.setup(swagger));
app.use("/", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    app.listen(port, () => console.log("Server started on port " + port));
  } catch (e) {
    console.log(e);
  }
};
start();
