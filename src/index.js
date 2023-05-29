import express from 'express';
import path from 'path';
import paymentsRouter from './routes/payment.routes.js'
import { PORT } from './config.js';
import morgan from 'morgan';

const app = express()

app.use(morgan('dev'))

app.use(paymentsRouter)

app.use(express.static(path.resolve('src/public')))

app.listen(PORT)
console.log('Server port', PORT)