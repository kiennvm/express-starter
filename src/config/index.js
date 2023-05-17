import { config } from 'dotenv';
export { default as swaggerConfig } from './swagger.config.js';
config();

// NOTE: If you are running the project in an instance, you should store these secret keys in its configuration settings.
// This type of storing secret information is only experimental and for the purpose of local running.

const { PORT, PREFIX, DB_LOCAL, DB_ATLAS } = process.env;

export const port = PORT || 3000;
export const prefix = PREFIX || '/api';
export const dbUrl = DB_LOCAL || DB_ATLAS;
export const specs = '/docs';
