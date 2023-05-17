import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import AppError from '../errors/AppError.js';

import { register } from '../controllers/user/index.js';

const router = Router();

function fakeDBCall(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new AppError('No user was found with id ' + id, 404));
    }, 1000);
  });
}

router.post(
  '/',
  asyncHandler(async (req, res, next) => register(req, res, next))
);

router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const data = await fakeDBCall(req.params.id);
    res.json(data);
  })
);

export default router;
