const mongoose = require('mongoose');

var Doctor = mongoose.model('doctor', {
    name: {
        type: String
    },
    special: {
        type: String
    },
    ratting: {
        type: Number
    },
    location : {
        type : {
            type : String,
            enum : ['Point'],
            require : true
        },
        coordinates : {
            type : [Number],
            require : true
        }
    }
})

module.exports = { Doctor };

var a = 5;

