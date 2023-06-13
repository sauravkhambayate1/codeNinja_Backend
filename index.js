const dotenv=require('dotenv')
dotenv.config();
const express  = require('express')
const app = express()
const cors = require('cors')
const credentialRoutes = require('./Routers/routes')
const connect = require('./database/db')
app.use(express.json())
app.use(credentialRoutes)
app.use(cors({
  origin: "*",
}))
app.listen(3005, ()=>{
    connect()
    console.log("Server running on Port 3005");
})