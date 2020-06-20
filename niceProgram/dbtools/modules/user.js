const mongoose = require('mongoose')
const Schema=mongoose.Schema
let blog=new Schema({
    username:Number,
    password:String,
    nickname:String,
    emali:String,
    age:{
        type:Number,
        default:20
    },
    phone:{
        type:String,
        default:18181265943
    },
    address:String,
    sex:{
        type:String,
        default:'男'
    },
    shopping:{
        type:Array,
        default:[]
    },
    collect:{
        type:Array,
        default:[]
    }
})
let Blog=mongoose.model('user',blog)
module.exports= {Blog}