import dotenv from "dotenv";

dotenv.config();

export const isDev = process.env.NODE_ENV !== "production";

export const port = process.env.PORT;
