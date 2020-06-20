const mongoose = require('mongoose')
mongoose.connect('mongodb://192.168.8.1:27017/nice')
const db=mongoose.connection;
db.once('open',function(){
    console.log('雷忆成功');
})
