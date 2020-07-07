const mongoose = require('mongoose')
mongoose.connect('mongodb://172.16.15.30:27017/nice')
const db=mongoose.connection;
db.once('open',function(){
    console.log('雷忆成功');
})
