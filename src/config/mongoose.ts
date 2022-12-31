import mongoose from 'mongoose';
import config from './vars';

export const connect = async () => {
  mongoose.set('strictQuery', false);
  await mongoose.connect(config.mongo.uri!);
  console.log('Database Connected');
};
