
require("dotenv").config()
const app = require("./src/app")
const connectdb = require("./src/config/db")
const port = 5000 

connectdb()
app.listen(port ,()=>{
    console.log("server is running on port" , port)
})