const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const inventoryOrdersSchema = new Schema({
    productID : {type : String},
    productName: {type :String},
    productCategory : {type : String},
    availableQuantity : {type : String},
    requestedQuantity : {type : String},
    status:{type : String}
    
     
},{
        timestamps : true,
    
});


const InventoryOrders = mongoose.model("InventoryOrders", inventoryOrdersSchema);

module.exports = InventoryOrders;