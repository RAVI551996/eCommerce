const mongoose = require('mongoose');

const porductSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter the product Name"]
    },
    description:{
        type:String,
        required:[true,"Please Enter the product Description"]
    },
    price:{
        type:Number,
        required:[true,"please Enter the product Price"]
    },
    rating:{
        type:Number,
        default:0,
    },
    images:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,"please enter product catogory"],

    },
    stock:{
        type:Number,
        required:[true,"please Enter the product stock"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:1
    },
    review:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:String,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
    
    
})

module.exports = mongoose.model('Product',porductSchema)