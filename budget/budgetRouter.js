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
  Budgets.getAllAccounts()
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Error getting accounts'});
    });
});


//  GET /:id
//----------------------------

router.get('/:id',(req,res,next)=>{
  const {id} = req.params;

  Budgets.getAccount(id)
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Error getting account'});
    });
});



//  POST /
//----------------------------

router.post('/',(req,res,next)=>{
  const newAccount = req.body;

  Budgets.addAccount(newAccount)
    .then(data =>{
      res.status(201).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Error creating account'});
    });


});



//  DELETE /:id
//----------------------------

router.delete('/:id',(req,res,next)=>{
  const id = req.params.id;

  Budgets.removeAccount(id)
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Error deleting account'});
    });

});



//  PUT /:id
//----------------------------

router.put('/:id',(req,res,next)=>{
  const id = req.params.id;
  const updatedAccount = req.body;
  
  Budgets.editAccount(id, updatedAccount)
    .then(data =>{
      res.status(200).json(data);
    })
    .catch(err =>{
      console.log(err);
      res.status(500).json({message:'Error editing account'});
    });

});



//  export
//----------------------------
module.exports = router;