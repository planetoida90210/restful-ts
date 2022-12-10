import exrpess from 'express';
import http from 'http';
import mongoose from 'mongoose';

import { config } from './config/config';
import Logging from './library/Logging';

const router = exrpess();

// connect to mongo

mongoose.set('strictQuery', false);

mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        Logging.info('Connected to mongodb');
    })
    .catch((error) => {
        Logging.error('Unable to connect:');
        Logging.error(error);
    });
