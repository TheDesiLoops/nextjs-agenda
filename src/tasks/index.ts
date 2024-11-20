import { Agenda } from "@hokify/agenda";

import HelloJob from "./HelloJob";

export function registerTasks(agenda: Agenda) {
  // Register tasks
  agenda.define("HelloJob", HelloJob);

  // Schedule tasks
  agenda.every("1 minute", "HelloJob"); // Example: Run every minute
}
