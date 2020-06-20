const mongoose = require('mongoose')
const Schema = mongoose.Schema
let UserSch = new Schema({
    name:String,
    logo:String,
})
const Blog = mongoose.model('brand',UserSch)
module.exports= {Blog}