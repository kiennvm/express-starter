export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Nodejs-Starter-Template API',
      version: '1.0.0',
      description:
        'The API documentation of a boilerplate/starter project for quickly building RESTful APIs using Node.js, Express, and Mongoose.',
    },
    basePath: '/api',
    servers: [
      {
        url: 'http://localhost:3000/api/',
      },
    ],
  },
  tags: [
    {
      name: 'User',
      description: 'API for users',
    },
  ],
  apis: [
    'src/models/*.js',
    'src/controllers/user/*.js',
  ],
};
