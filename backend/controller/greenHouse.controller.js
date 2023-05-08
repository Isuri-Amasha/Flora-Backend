const GreenHouse = require("../models/greenHouse.model");

//add employee function
const addGreenHouse = async (req, res) => {
    const { ghID, name, contactNo, email, address, flowers } =
      req.body;
  
    const greenHouse = new GreenHouse({
        ghID, 
        name, 
        contactNo, 
        email, 
        address, 
        flowers 
      
    });
  
    await greenHouse
      .save()
      .then(() => res.json('Green House added!'))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getGreenHouse = async (req, res) => {
    try {
      const greenHouse = await GreenHouse.find();
      res.json(greenHouse);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getGreenHouseById = async (req, res) => {
    try {
      const greenHouse = await GreenHouse.findById(req.params.id);
      res.json(greenHouse);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateGreenHouse = async (req, res) => {
    GreenHouse.findByIdAndUpdate(req.params.id)
      .then((existingGreenHouse) => {
        existingGreenHouse.ghID = req.body.ghID;
        existingGreenHouse.name = req.body.name;
        existingGreenHouse.contactNo = req.body.contactNo;
        existingGreenHouse.email = req.body.email;
        existingGreenHouse.address = req.body.address;
        existingGreenHouse.flowers = req.body.flowers;
      
        
        existingGreenHouse
          .save()
          .then(() => res.json('Green House updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteGreenHouse = async (req, res) => {
    GreenHouse.findByIdAndDelete(req.params.id)
      .then((deletedGreenHouse) => {
        res.json('GreenHouse deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  module.exports = {
    addGreenHouse,
    getGreenHouse,
    getGreenHouseById,
    updateGreenHouse,
    deleteGreenHouse,
   
  }