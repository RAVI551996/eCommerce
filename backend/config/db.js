const mongoose = require('mongoose');

const connectDataBase =()=>{
    mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:'true',
            useUnifiedTopology:'true',
        // useCreateIndex:"true"
    }).then((data)=>{
        console.log(`MongoDB connection succesfull :${data.connection.host}`);
    
    })
}

module.exports=connectDataBase;