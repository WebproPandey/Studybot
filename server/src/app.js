const  express  =  require('express')

const app =  express()
app.use(express.json())

// require all  this routes

const authRouter =  require("./routes/auth.route")


// useing all the routes here
app.get("/", (req, res) => {
    res.send("Welcome to StudyBot API")
})
app.use("/api/auth" ,authRouter)

module.exports = app
