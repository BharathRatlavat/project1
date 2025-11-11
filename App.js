// // Node....................
// const fs=require("fs")
// //  fs.writeFileSync("dummy text","hello world")

// const http=require("http")
//  const server=http.createServer((req,res)=>{
//     console.log(req.headers,req.url)
// const url=req.url
// const method=req.method

// let data=url.replace("/","")

//   if(url== "/"){
//   res.write("<html>")
//   res.write("<head><title>Node project</title></head>")
//   res.write("<body>")
//   res.write("<h1>Hello world</h1>")
//   res.write("</body>")
//   res.write("</html>")
//    return res.end()
//   }

//   res.write("<html>")
//   res.write("<head><title>Node project</title></head>")
//   res.write("<body>")
//   res.write('<h1>Hello world ${data}</h1>')
//   res.write("</body")
//   res.write("</html>")
//   res.end()

//  })

//  server.listen(3000)



// EXPRESSS...............

// const express=require("express")
// const app =express()

// app.use((req,res,next)=>{
//     console.log(req.method)
//   res.send("<h1>hello world</h1>")
//   next()
// })

// app.use((req,res,next)=>{
//     console.log(req)
//     res.send("<p> hello world 2</p>")
//     console.log("hello")
// })
// app.listen(4000)

// EXPRESS ROUTTES....

const express = require("express")

const bodyParser=require("body-parser")

const shop = require("./Routes/shop")
const admin = require("./Routes/admin")

const mongo=require("mongoose")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))

mongo.connect('mongodb://localhost:27017/Nodejs').then(()=>{
  console.log("connected successfully")
}).catch(()=>{
console.log("connection failed")
})
app.use(shop)
app.use("/admin", admin)
// khgwiaeukrgyb
app.use((req, res, next) => {
  res.send("<h1>404 page not found</h1>")
})
app.listen(4000)
