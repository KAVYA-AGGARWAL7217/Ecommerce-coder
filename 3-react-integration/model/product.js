const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        title: {type:String,required :true}, // String is shorthand for {type: String}
        description: String,
        category: String,
        price: {type:Number,min:[0,'wrong price'],required:true},
        discountPercentage: {type:Number,min:[0,'wrong min discount'],max:[50,'wrong max discount']},
        rating: {type:Number,min:[0,'wrong min rating'],max:[50,'wrong max rating'],default:0},
        brand: {type:String,required :true},
        thumbnail:String,
        images:[String]
      });
exports.Product = mongoose.model('Product', productSchema);
