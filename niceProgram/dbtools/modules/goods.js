const mongoose = require('mongoose')
const Schema=mongoose.Schema
let blog=new Schema({
    type:String,
    des:String,
    title:String,
    price:String,
    gender:String,
    src:String,
    kinds:String,
})
let Blog=mongoose.model('goods',blog)
module.exports= {Blog}