const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    
    fullName: {type :String, required : true},
    dob : {type : String, required : true},  
    NIC : {type : String, required : true},
    email : {type : String, required : true},
    contactNo : {type : String,unique : true, required : true},
    address : {type : String, required : true},
    userRole : {type : String, required : true},
    password : {type : String, required : true},
   
    
     
},{
        timestamps : true,
    
});


const Customer = mongoose.model("Customer2", customerSchema);

module.exports = Customer;