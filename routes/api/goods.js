const express = require('express');
const router = express.Router();
let { Goods, User } = require('../../models/');
const { sc, au, rm } = require('../../modules/utils');
const upload = require('../../config/multer');

const ObjectID = require('mongodb').ObjectID;

/* GET home page. */
router.post('/goods', upload.array('images', 10), async (req, res, next) => {
  
  try {
    const { email } = req.body;
    const { goodsName, comment, color, category, gender, size, price, condition, style } = req.body;
    
    let files = req.files;
    let imageArr = files.map(it => it.location);

    // find user
    const user = await User.findOne().where('email').equals(email);

    // make obj
    const obj = {
      goodsName, comment, color, category, gender, size, price, condition, style,
      img: imageArr,
      sellerName: user.username,
      sellerId: { _id: ObjectID(user._id)}
    };

    console.log(obj);

    let goods = new Goods(obj);
    const result = await goods.save();
    if(!result) {
      console.log(`DB저장 에러 발생`);
      res.status(sc.FORBIDDEN).json({
        code: sc.OK,
        json: au.successTrue(`Database 저장에 실패했습니다.`, result)
      });
    }

    // sellerAuth: true, saleList
    user.sellerAuth = true
    user.saleList.push({ _id: result._id });
    const resultUser = await user.save();

    console.log(`@@This is user data@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
    console.log(resultUser);

    console.log(`@@This is goods data@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);
    console.log(result);

    
    res.status(sc.OK).json({
      code: sc.OK,
      json: au.successTrue(`Goods를 Database에 저장했습니다.`, result)
    });

  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(sc.INTERNAL_SERVER_ERROR).json({
      code: sc.INTERNAL_SERVER_ERROR,
      json: au.successFalse(`서버 내부오류 발생`)
    });
  }
});

module.exports = router;
