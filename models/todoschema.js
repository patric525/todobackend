const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    todo:{
        type:String,
        require:true
    },
    check:{
        type:Boolean,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    month:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    }
})

const todo = mongoose.model('todo' , todoSchema)
module.exports=todo