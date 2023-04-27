import { config } from 'dotenv';
config();

// NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const {
  PORT,
  PREFIX,
  DB,
  DB_LOCAL,
} = process.env;

export const port = PORT || 3000;
export const prefix = PREFIX || '/api';
export const dbUrl = DB || DB_LOCAL;
