import express from "express";
import serverless from "serverless-http";
import type { Handler } from "@netlify/functions";
import { registerRoutes } from "../../server/routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initialized = false;
async function ensureInit() {
  if (!initialized) {
    // Register API routes on the Express app (ignore returned http server)
    await registerRoutes(app);
    initialized = true;
  }
}

const serverlessHandler = serverless(app);

export const handler: Handler = async (event, context) => {
  await ensureInit();
  return serverlessHandler(event, context);
};