const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
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
const Admin = mongoose.model('admin',adminSchema);

module.exports=Admin;