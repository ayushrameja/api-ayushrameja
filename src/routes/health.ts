import { Hono } from "https://deno.land/x/hono@v4.1.0/mod.ts";
import { healthController } from "../controllers/health.ts";

const healthRouter = new Hono();

healthRouter.get("/", healthController.getHealth);

export { healthRouter };