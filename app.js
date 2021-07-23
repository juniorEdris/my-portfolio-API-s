// Primary imports
import express from 'express'
import cors from 'cors'
import mongodb from 'mongodb'
import assert from 'assert'
import dotenv from 'dotenv'
dotenv.config()

// Route imports
import home from './routes/home.js'


// Primary functions 
const app = express()
const PORT = 4000

    
app.use(cors())
app.use(express.json())

app.use('/api/portfolio/home', home)

app.use('*', (req, res) => {
    
    res.status(404).json({error:'not found'});

})

// mongodb function
const MongoClient = mongodb.MongoClient
MongoClient.connect(
    process.env.MONGO_DB_ENTRY,
    function(err, client) {
        assert.equal(null, err);
        client.close();
      }
)

// LISTENING THE PORT
app.listen(PORT, () => {
    console.log(`Port started on ${PORT}`)
})