// eslint-disable-next-line @typescript-eslint/no-var-requires
import { build } from "esbuild";

build({
  entryPoints: ["./src/agenda.ts"], // Entry file for Agenda tasks
  bundle: true, // Bundle all dependencies into a single file
  platform: "node", // Target Node.js environment
  outfile: "agenda-dist/agenda.js", // Output file
  sourcemap: true, // Optional: Generate source maps
  target: "node16", // Adjust based on your Node.js version
  minify: true, // Optional: Minify the output
}).catch(() => process.exit(1));
