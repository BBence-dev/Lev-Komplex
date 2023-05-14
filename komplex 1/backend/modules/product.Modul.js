const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nev:{
        type:String,
        required:[true,'Muszály meg adni'],
        unique:true
    },
    suly:{
        type:Number,
        default:4.5
    },
    ar:{
        type:Number,
        required:[true,'Meg kell adni']
    },
    szhely:{
        type:String,
    },
    db:{
        type:Number,
        default:1
    }
});
const Product = mongoose.model('Product',productSchema);

module.exports=Product;