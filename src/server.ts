import { Hono } from "https://deno.land/x/hono@v4.1.0/mod.ts";
import { healthRouter } from "./routes/health.ts";

const app = new Hono();

// Register routes
app.route("/api/health", healthRouter);

const port = 3000;

Deno.serve({ port }, app.fetch);

console.log(`Server is running on http://localhost:${port}`);