import type { HealthResponse } from "../types/health.ts";

export const healthService = {
  checkHealth: (): HealthResponse => {
    return {
      status: true,
      message: "Server is healthy",
      uptime: performance.now(),
    };
  },
};
