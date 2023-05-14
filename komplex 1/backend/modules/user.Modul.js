const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nev:{
        type:String,
        required:[true,'Muszály meg adni'],
        unique:true
    },
    kor:{
        type:Number,
        required:[true,'Meg kell adni']
    },
    szhely:{
        type:String,
    },
    password:{
        type:String,
        required:[true,'Meg kell adni']
    },
    username:{
        type:String,
        required:[true,'Meg kell adni']
    }
});
const User = mongoose.model('User',userSchema);

module.exports=User;