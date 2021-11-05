import * as controller from '../controller/index.js'


const productsController = new controller.ProductsController()
const sellController = new controller.SellsController()

import { Router } from 'express'

export const router = Router()


/**
 curl --location --request GET 'http://192.168.0.112:8000/api/products'
 */
router.get('/products', productsController.all)
/**
 curl --location --request POST 'http://192.168.0.112:8000/api/product' \
 --header 'Content-Type: application/json' \
 --data-raw '{
    "productName": "Papitas pal loro",
    "description": "Descripcion m",
    "productPrice": "21000",
    "status": "disponible"
}'
 */
router.post('/product', productsController.create)

router.put('/product', productsController.update)
router.delete('/product/:id', productsController.delete)
//
router.get('/sells', sellController.all)
router.post('/sell', sellController.create)

/**
 curl --location --request PUT 'http://192.168.0.112:8000/api/sell' \
 --header 'Content-Type: application/json' \
 --data-raw '{
    "_id": "61847a9829e0a76a3a287039",
    "clientName": "Cristian Mauricio guerrero",
    "clientID": "2233333",
    "totalValue": "63000",
    "sellerName": "Un vendedor",
    "products": [
        {
            "productName": "Papitas pal loro",
            "productPrice": "21000",
            "productAmount": "2",
            "_id": "61847a9829e0a76a3a28703a"
        }
    ],
    "__v": 0
}'
 */
router.put('/sell', sellController.update)
/**
 curl --location --request DELETE 'http://192.168.0.112:8000/api/sell/6184872dd3c9d9b46ef848b7' \
 --data-raw ''
 */
router.delete('/sell/:id', sellController.delete)
