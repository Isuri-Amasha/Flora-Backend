const router = require('express').Router();
const { response } = require('express');
let GreenHouse = require("../models/greenHouse.model");


const {
    addGreenHouse,
    getGreenHouse,
    getGreenHouseById,
    updateGreenHouse,
    deleteGreenHouse,
   
  } = require("../controller/greenHouse.controller");
  
  //@route  GET api/news/all
  //@desc   get all news
  //@access Public
  router.get("/", getGreenHouse);
  
  //@route  GET api/news/:if
  //@desc   get news by Id
  //@access Public
  router.get("/:id", getGreenHouseById);
  
  //@route  POST api/news
  //@desc   add news
  //@access Private
  router.post("/", addGreenHouse);
  
  //@route  PUT api/news
  //@desc   update news
  //@access Private
  router.put("/:id", updateGreenHouse);
  
  //@route  DELETE api/news
  //@desc   delete news
  //@access Private
  router.delete("/:id", deleteGreenHouse);

  
  
  module.exports = router;