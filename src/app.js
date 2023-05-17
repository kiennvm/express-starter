import express from 'express';
import loader from './loaders/index.js';

// Initialize Express app
const app = express();

loader(app);
