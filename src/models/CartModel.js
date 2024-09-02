const mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
        productID:{type:mongoose.Schema.Types.ObjectId,required:true},
        userID:{type:mongoose.Schema.Types.ObjectId,required:true},
        color:{type:String,require:true},
        qty:{type:String,require:true},
        size:{type:String,require:true}
    },
    {timestamps:true,versionKey:false}
)

const CartModel=mongoose.model('carts',DataSchema)

module.exports=CartModel