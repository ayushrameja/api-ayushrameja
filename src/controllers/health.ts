import { Context } from "https://deno.land/x/hono@v4.1.0/mod.ts";
import { healthService } from "../services/health.ts";
import type { HealthResponse } from "../types/health.ts";

export const healthController = {
  getHealth: async (c: Context): Promise<Response> => {
    const healthData: HealthResponse = await healthService.checkHealth();
    return c.json(healthData);
  },
};