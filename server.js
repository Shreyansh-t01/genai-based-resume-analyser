const app = require('./src/app')
const env = require('dotenv')



app.listen(env.port,function(){
    console.log("server is listening at 3000")
})