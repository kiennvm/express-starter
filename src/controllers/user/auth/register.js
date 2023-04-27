import { User } from '../../../models/index.js';

export default async (req, res) => {
  let user = new User({
    email: req.body.email,
    username: req.body.username,
  });

  user = await user.save().catch((err) => {
    return res.status(500).json({
      code: 500,
      message: err,
    });
  });

  return res.status(200).json({
    code: 200,
    message: 'Registered successfully!',
    user,
  });
};
