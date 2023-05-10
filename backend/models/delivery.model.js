const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({
    //delivery id is auto generated
    orderId : {type : String, required : true},
    customer : {type : String, required : true},
    item : {type : String,required : true},
    quantity : {type : String,required : true},
    deliveryAddress : {type : String, required : true}, 
    amount : {type : String, required : true},
    orderStatus : {type : String,},
    assignedEmp : {type : String,}
    
     
},{
        timestamps : true,
    
});


const Delivery = mongoose.model("Delivery", deliverySchema);

module.exports = Delivery;