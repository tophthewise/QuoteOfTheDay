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
.post('/add', async (req, res) => {
    try {
        const result = await Quote.addQuote(req.body.quote, req.body.userId)
        res.send(result)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
.put('/update', async (req, res) => {
    try {
        const result = await Quote.updateQuote(req.body.quoteId, req.body.quote)
        res.send(result)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})
.delete('/delete', async (req, res) => {
    try {
        const result = await Quote.deleteQuote(req.body.quoteId)
        res.send(result)
    } catch(err) {
        res.status(401).send({message: err.message})
    }
})

module.exports = router