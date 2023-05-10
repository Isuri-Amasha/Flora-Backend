const Delivery = require("../models/delivery.model");

const addDelivery = async (req, res) => {
    const { orderId, customer, item, quantity, deliveryAddress,amount, orderStatus, assignedEmp } =
      req.body;
  
    const delivery = new Delivery({
        orderId,
        customer,
        item,
        quantity,
        deliveryAddress,
        amount,
        orderStatus,
        assignedEmp
    });
  
    await delivery
      .save()
      .then(() => res.json(delivery._id))
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const getDelivery = async (req, res) => {
    try {
      const delivery = await Delivery.find();
      res.json(delivery);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const getDeliveryById = async (req, res) => {
    try {
      const delivery = await Delivery.findById(req.params.id);
      res.json(delivery);
    } catch (error) {
      res.status(500).send("Server Error" + error);
    }
  };

  const updateDelivery = async (req, res) => {
    Delivery.findByIdAndUpdate(req.params.id)
      .then((existingDelivery) => {
        existingDelivery.orderId = req.body.orderId;
        existingDelivery.customer = req.body.customer;
        existingDelivery.item = req.body.item;
        existingDelivery.quantity = req.body.quantity;
        existingDelivery.deliveryAddress = req.body.deliveryAddress;
        existingDelivery.amount = req.body.amount;
        existingDelivery.orderStatus = req.body.orderStatus;
        existingDelivery.assignedEmp = req.body.assignedEmp;
        
        existingDelivery
          .save()
          .then(() => res.json('Delivery updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  const deleteDelivery = async (req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
      .then((deletedDelivery) => {
        res.json('Delivery deleted');
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };

  const updateDeliveryStatus = async (req, res) => {
    Delivery.findByIdAndUpdate(req.params.id)
      .then((existingDelivery) => {
       
        existingDelivery.orderStatus = req.body.orderStatus;
        
        existingDelivery
          .save()
          .then(() => res.json('Delivery Status updated!'))
          .catch((error) => res.status(400).json("Error: " + error));
      })
      .catch((error) => res.status(400).json("Error: " + error));
  };
  
  module.exports = {
    addDelivery,
    getDelivery,
    getDeliveryById,
    updateDelivery,
    deleteDelivery,
    updateDeliveryStatus
   
  }