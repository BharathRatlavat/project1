// const express=require("exptress")

// const router=express.Router()

// router.get("/",(req,res,next)=>{
//     console.log(req.mathod)
//     res.send("<h1>hello</h1>")

// })
// router.get("/product",(req,res,next)=>{
//     console.log("hi")
//     res.send("<h1>hello world</h1>")
// })
// module.exports=router

// const express = require("express")
// const path = require("path")
// const router = express.Router()

// router.get("/", (req, res, next) => {
//     console.log(req)
//     res.sendFile(path.join(__dirname, "../", "views", "form.html"))
// })
// router.get("./product", (req, res, next) => {
//     console.log("hi")
//     res.send("<h1>helloo</h1>")
// })
// module.exports = router

const express = require("express")
const path = require("path")
const router = express.Router()

router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "../", "views", "home.html"))
})

module.exports = router