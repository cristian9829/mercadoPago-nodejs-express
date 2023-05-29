import mercadopago from "mercadopago"
import { MERCADO_PAGO_TOKEN, HOST } from '../config.js';

export const createOrder = async (req, res) => {
    mercadopago.configure({
        access_token: MERCADO_PAGO_TOKEN
    })

    const result = await mercadopago.preferences.create({
        items:[
            {
                title:"Computador",
                unit_price: 100000,
                currency_id: "COP",
                quantity: 1
            }
        ],
        back_urls:{
            success: `${HOST}sucess`,
            failure: `${HOST}failure`,
            pending: `${HOST}pending`
        },
        notification_url: "https://fe82-186-31-172-92.ngrok-free.app/webhook"
    })
    console.log(result)
    res.send(result.body)
}

export const receiveWebhook =  async (req, res) => {
    try {
        console.log(req.query)
        const payment = req.query;
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(payment['data.id'])
            console.log(data)
        }
        res.sendStatus(204)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500).json({error: error.message})
        
    }
    
}