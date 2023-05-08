const router = require('express').Router();
const { response } = require('express');
let Supplier = require("../models/supplier.model");


const {
    addSupplier,
    getSuplliers,
    getSupplierById,
    updateSupplier,
    deleteSupplier,
   
  } = require("../controller/supplier.controller");
  
  //@route  GET api/news/all
  //@desc   get all news
  //@access Public
  router.get("/", getSuplliers);
  
  //@route  GET api/news/:if
  //@desc   get news by Id
  //@access Public
  router.get("/:id", getSupplierById);
  
  //@route  POST api/news
  //@desc   add news
  //@access Private
  router.post("/", addSupplier);
  
  //@route  PUT api/news
  //@desc   update news
  //@access Private
  router.put("/:id", updateSupplier);
  
  //@route  DELETE api/news
  //@desc   delete news
  //@access Private
  router.delete("/:id", deleteSupplier);

  
  
  module.exports = router;