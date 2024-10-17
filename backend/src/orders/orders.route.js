const express = require('express')
const router = express.Router();



// Creae Checkout session
router.post("/create-checkout-session", async (req, res) => {
    const {products} = req.body;

    try {
        const lineItems = products.map((product) => ({
            price_data: {
                currency: "usd"
            }
        }))
        
    } catch (error) {
        console.error('Error creating checkout session', error);
        res.status(500).send({message: 'Failed to create checkout session'})
    }
})