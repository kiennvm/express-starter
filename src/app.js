import express from 'express';
import loader from './loaders/index.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

// Initialize Express app
const app = express();

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'My API',
    version: '1.0.0',
    description: 'API documentation using Swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

// Swagger options
const swaggerOptions = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API routes files
};

// Initialize Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

loader(app);
