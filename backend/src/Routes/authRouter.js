const {Router} = require('express')
const {registerUser} = require("../Controller/authController")

const authRouter = Router()

authRouter.post("/Register",registerUser)


module.exports = authRouter