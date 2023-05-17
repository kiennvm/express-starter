import { User } from '../../../models/index.js';

export default async (req, res, next) => {
  await User.create(req.body);

  res.status(200).json({
    code: 200,
    message: 'Registered successfully!',
  });
};
