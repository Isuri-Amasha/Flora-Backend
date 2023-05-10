const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    //order id is auto generated
    customer : {type : String, required : true},
    item : {type : String,required : true},
   
    quantity : {type : String,required : true},
    
    orderFor : {type : String, required : true}, //delivery, pickup
    deliveryAddress : {type : String},
    amount : {type : String, required : true},
    orderStatus : {type : String,}, //order taken, order processing, order delivering, order completed
    paymentStatus : {type : String,}, //order taken, order processing, order delivering, order completed
    bankName : {type : String,}, //order taken, order processing, order delivering, order completed
    accName : {type : String,} //order taken, order processing, order delivering, order completed
    
     
},{
        timestamps : true,
    
});


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;