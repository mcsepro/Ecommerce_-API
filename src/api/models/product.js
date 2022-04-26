const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId


const productSchema = new mongoose.Schema({
    Id : {
       type: ObjectID,
       unique: true   },

    name: {
       type: String,
       required: true,
       trim: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
       type: String,
       required: true
    },
    price: {
       type: Number,
       required: true
    }
    }, {
      createdDate: { 
         type: Date, 
         default: Date.now,
         required: true
       }
    })

   const Product = mongoose.model('Product', productSchema)
   module.exports = Product