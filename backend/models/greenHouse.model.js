const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const greenHouseSchema = new Schema({
    ghID : {type : String, unique : true,required : true},
    name: {type :String, required : true},
    contactNo : {type : String, required : true},
    email: {type :String, required : true},
    address: {type :String, required : true},
    flowers : [],
    
     
},{
        timestamps : true,
    
});


const GreenHouse = mongoose.model("GreenHouse", greenHouseSchema);

module.exports = GreenHouse;