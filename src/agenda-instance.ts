import { Agenda } from "@hokify/agenda";
// Dotenv
import dotenv from "dotenv";
dotenv.config();
const mongoConnectionString = process.env.MONGO_URI || "";
if (!mongoConnectionString) {
  console.error("Mongo URI is missing");
  process.exit(1);
}
const agenda = new Agenda({
  db: { address: mongoConnectionString, collection: "jobs" },
});
export default agenda;
