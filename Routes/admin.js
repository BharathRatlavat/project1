const express = require("express")
const path = require("path")
const router = express.Router()
const utilPath=require("../utils/path")

router.get("/addproduct", (req, res, next) => {
    console.log(req.method)
    res.sendFile(path.join(utilPath, "views", "form.html"))
})

router.post("/addproduct", (req, res, next) => {
    console.log(req.body)
    res.redirect("/")
})

router.get("./product", (req, res, next) => {
    console.log("hi")
    res.send("<h1>helloo</h1>")
})
module.exports = router