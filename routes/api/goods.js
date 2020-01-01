const express = require('express');
const router = express.Router();
let { Goods } = require('../../models/');
const { sc, au, rm } = require('../../modules/utils');
const upload = require('../../config/multer');

/* GET home page. */
router.post('/goods', upload.array('images', 10), async (req, res, next) => {
  try {
    const { goodsName, comment, coloe, category, gender, size, price, grade, condition, style } = req.body;
    const obj = { goodsName, comment, coloe, category, gender, size, price, grade, condition, style, img: req.files };
    
    console.log(`obj: ${obj}`);

    let goods = new Goods(obj);
    const result = await goods.save();
    if(!result) {
      console.log(`DB저장 에러 발생`);
      res.status(sc.FORBIDDEN).json({
        code: sc.OK,
        json: au.successTrue(`Database 저장에 실패했습니다.`, result)
      });
    }

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
    console.log(result);
  }
});

module.exports = router;
