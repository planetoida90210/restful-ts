import exrpess from 'express';
import http from 'http';
import mongoose from 'mongoose';

import { config } from './config/config';

const router = exrpess();

// connect to mongo

mongoose.set('strictQuery', false);

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('connected');
    })
    .catch((error) => {
        console.log(error);
    });
