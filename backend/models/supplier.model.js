const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({
    supID : {type : String, unique : true,required : true},
    fullName: {type :String, required : true},
    contactNo : {type : String, required : true},
    email: {type :String, required : true},
    address: {type :String, required : true},
    
     
},{
        timestamps : true,
    
});


const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;