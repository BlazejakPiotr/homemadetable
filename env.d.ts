/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production";
    DATABASE_URL: "string";
    AUTH_SECRET: "string";
    AUTH_GOOGLE_ID: "string";
    AUTH_GOOGLE_SECRET: "string";
  }
}
