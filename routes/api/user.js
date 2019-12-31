const express = require('express');
const router = express.Router();
let { User } = require('../../models/')

/* GET home page. */
router.post('/user', async (req, res, next) => {
  const { email, pwd, username, gender, address, phone, simple, street, lovely, modernchic, unique, formal, ethnic, sporty, oldschool } = req.body;
  
  const obj = { 
    email: email, 
    pwd: pwd, 
    username: username, 
    gender: gender, 
    address: address, 
    phone: phone, 
    style: { 
      simple: Number(simple),
      street: Number(street), 
      lovely: Number(lovely), 
      modernchic: Number(modernchic), 
      unique: Number(unique), 
      formal: Number(formal), 
      ethnic: Number(ethnic), 
      sporty: Number(sporty), 
      oldschool: Number(oldschool) 
    }
  };

  console.log(`obj: ${obj}`);
  

  let user = new User(obj);
  const result = await user.save();
  console.log(result);
});

module.exports = router;
