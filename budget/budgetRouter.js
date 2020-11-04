const express = require('express');
const Budgets = require('../data/budgetModel');
//const Items = require('../data/itemModel');

const router = express.Router();


//----------------------------
//  middleware validation
//----------------------------


//----------------------------
//  Endpoints
//----------------------------
// BaseURL/api/budgets
//----------------------------


//  GET / 
//----------------------------

router.get('/',(req,res,next)=>{

});


//  GET /:id
//----------------------------

router.get('/:id',(req,res,next)=>{

});



//  POST /
//----------------------------

router.post('/',(req,res,next)=>{

});



//  DELETE /:id
//----------------------------

router.delete('/:id',(req,res,next)=>{

});



//  UPDATE /:id
//----------------------------

router.update('/:id',(req,res,next)=>{

});



//  export
//----------------------------
module.exports = router;