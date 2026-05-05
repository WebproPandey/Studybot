const express =  require('express')
const authcontroller = require("../controllers/auth.controller")


const authRouter =  express.Router()

/**
 * @route  POST /api/auth/register
 * @description Register a new user
 * @access Public
 */


authRouter.post("/register",authcontroller.registerUserController)
/**
 * @route  POST /api/auth/login
 * @description Login user
 * @access Public
 */

authRouter.post("/login", authcontroller.loginUserController)


module.exports = authRouter

