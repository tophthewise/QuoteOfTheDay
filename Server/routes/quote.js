const express = require("express")
const router = express.Router()
const Quote = require("../models/quote")

router
.get('/getAllQuotes', async (req, res) => {
    try {
        const quotes = await Quote.getAllQuotes()
        res.send(quotes)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
module.exports = router