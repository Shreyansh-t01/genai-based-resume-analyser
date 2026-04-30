const {Router} = require("express")
const {registerUser,loginUser,logoutUser} = require('../Controller/authController')

const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)

authRouter.get("/logout",logoutUser)

module.exports = authRouter