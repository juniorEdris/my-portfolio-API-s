import express from 'express'

const router = express.Router()

router.get('/',(req, res) => {
    try {
        res.send('<h1 style=\'text-align:center;\'>Hello world update</h1>');
    } catch (error) {
        res.send('Internal server error.')
    }
})

export default router