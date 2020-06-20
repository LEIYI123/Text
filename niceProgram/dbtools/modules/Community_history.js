const mongoose = require('mongoose')
const Schema = mongoose.Schema
let UserSch = new Schema({
    pingpai:String,
    msg:String,
})
const UserModel = mongoose.model('comm_historys',UserSch)
module.exports=UserModel