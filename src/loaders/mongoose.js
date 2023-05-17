import mongoose from 'mongoose';

import { dbUrl } from '../config/index.js';

export default async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(dbUrl, {}).catch((err) => {
    console.log(err);
    process.exit(1);
  });
  console.log('Mongodb connection successful!');
};
