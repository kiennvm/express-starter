import express from 'express';
import asyncHandler from 'express-async-handler';
import { prefix } from '../config/index.js';
import routes from '../routes/index.js';
import AppError from '../errors/AppError.js';

export default (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(
    asyncHandler(async (req, res, next) => {
      next();
    })
  );

  app.use(prefix, routes);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.header('Content-Security-Policy-Report-Only', 'default-src: https:');
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'PUT POST PATCH DELETE GET');
      return res.status(200).json({});
    }
    next();
  });

  app.use((_req, _res, next) => {
    const error = new AppError('Endpoint could not be found!', 404);
    next(error);
  });

  app.use((error, req, res, _next) => {
    res.status(error.status || 500);
    // console.log(resultCode, req?.user?._id ?? '', error.message, level, req);
    return res.json({
      code: error.status,
      message: error.message,
    });
  });
};
