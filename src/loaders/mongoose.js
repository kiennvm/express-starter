import mongoose from 'mongoose';

import { dbUrl } from '../config/index.js';

export default async () => {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(dbUrl, {})
    .then(console.log('MongoDB connection successful!'))
    .catch((err) => {
      console.log(err);
    });
};
