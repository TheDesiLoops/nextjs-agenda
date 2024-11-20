// Dotenv
import dotenv from "dotenv";

import agenda from "./agenda-instance";
import { registerTasks } from "./tasks";
dotenv.config();

const mongoConnectionString = process.env.MONGO_URI || "";

if (!mongoConnectionString) {
  console.error("Mongo URI is missing");
  process.exit(1);
}

registerTasks(agenda); // Loads all tasks and schedules them

(async function start() {
  await agenda.start();
  console.log("Agenda started...");
})();
