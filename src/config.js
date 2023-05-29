import {config} from 'dotenv'
config();

export const PORT = 3000
export const HOST = `http:localhost:${PORT}/`
export const MERCADO_PAGO_TOKEN = process.env.MERCADO_PAGO_TOKEN