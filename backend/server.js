const app =require ('./app');
const dotenv = require('dotenv');
const connectDataBase = require('./config/db');

// handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error ${err.message}`)
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit();
})
// config
dotenv.config({path:'backend/config/config.env'})

// calling db
connectDataBase();

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port no ${process.env.PORT}`);
})

// console.lot(youtube)//uncaugth error
// unhandled Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(()=>{
    process.exit();
    })
})