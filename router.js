const express = require('express')

const route= express.Router();


const homePage = require("./pages/home")


// route.get("/",createCheckout.createCheckout)
// route.get("/check",checkCheckout.checkCheckout)
// route.post("/test",testPage.Test)

route.get("/",homePage.HomePage)


module.exports = route