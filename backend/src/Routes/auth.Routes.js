const {Router} = require("express")
const {registerUser,loginUser,logoutUser,getMe} = require('../Controller/authController')
const {isUserSigned} = require('../Middlewares/authMiddleware')


const authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login",loginUser)

authRouter.get("/logout",logoutUser)
authRouter.get("/getme",isUserSigned,getMe)

module.exports ={ authRouter}