const Supplier = require("../models/supplier.model");

//add employee function
const addSupplier = async (req, res) => {
    const { supID, fullName, contactNo, email, address } =
      req.body;
  
    const supplier = new Supplier({
        supID,
        fullName,
        contactNo,
        email,
        address,
      
    });
  
    await supplier
      .save()
      .then(() => res.json('Supplier added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getSuplliers = async (req, res) => {
    try {
      const supplier = await Supplier.find();
      res.json(supplier);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getSupplierById = async (req, res) => {
    try {
      const supplier = await Supplier.findById(req.params.id);
      res.json(supplier);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateSupplier = async (req, res) => {
    Supplier.findByIdAndUpdate(req.params.id)
      .then((existingSupplier) => {
        existingSupplier.supID = req.body.supID;
        existingSupplier.fullName = req.body.fullName;
        existingSupplier.contactNo = req.body.contactNo;
        existingSupplier.email = req.body.email;
        existingSupplier.address = req.body.address;
        
        existingSupplier
          .save()
          .then(() => res.json('Supplier updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteSupplier = async (req, res) => {
    Supplier.findByIdAndDelete(req.params.id)
      .then((deletedSupplier) => {
        res.json('Supplier deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  module.exports = {
    addSupplier,
    getSuplliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier,
   
  }