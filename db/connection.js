const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'})

db=process.env.DATABASE

const connect = async()=>{
   const connection = await mongoose.connect(db)
   if(connection){
    console.log('connection established with the databsse');
   }
   else{
    console.log('connection cannot established with the databsse');
   }
}
connect()
