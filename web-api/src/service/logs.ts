import { Log } from "../models/log";
class LogService {
  async list(): Promise<Log[]> {
    const log: Log[] = await Log.findAll();
    return log;
  }
}
export default new LogService();
