const express = require('express');
const router = express.Router();
let { User } = require('../../models/')
const { sc, au, rm } = require('../../modules/utils');

router.get('/userList', async (req, res) => {
  const result = await User.find().select('email');
  console.log(`userList 조회성공`);

  res.status(200).json({
    code: sc.OK,
    json: au.successTrue(`userList 조회 성공`, result)
  });
});