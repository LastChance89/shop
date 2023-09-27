const mongoose = require('mongoose')

const itemsSchema = new mongoose.Schema({
    item_name: {
        type: String
    },
    item_cost:{
        type: Number
    },
    inventory:{
        type:Number
    }
})

const Items = mongoose.model("items", itemsSchema);

module.exports = Items;