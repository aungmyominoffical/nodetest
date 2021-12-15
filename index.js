const express = require('express')

const app=express()
const PORT = process.env.PORT || 8001


const bodyParser = require('body-parser');

app.use(express.json())



app.listen(PORT,()=>{
    console.log(`Running in PORT ${PORT}`);
})


app.use("/",require("./router"))