const mongoose = require('mongoose');
const { Schema } = mongoose;
const style = require('./style');

const userSchema = new Schema({
  // 이메일
  email: { type: String, required: true, unique: true, },
  
  // 비밀번호
  pwd: { type: String, required: true, unique: false, },

  // 닉네임
  username: { type: String, required: true, unique: false, },

  // 성별
  gender: { type: String, required: true, unique: false, },

  // 배송지
  address: { type: String, required: false, unique: false, },

  // 휴대폰 번호
  phone: { type: String, required: false, unique: false, },

  // 판매자 권한
  sellerAuth: { type: Boolean, required: false },

  // 팔로우 리스트
  following: [
    { followingUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }}
  ],

  // 팔로워 리스트
  follower: [
    { followerUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }},
  ],

  // 찜 목록
  like: [{ likeGoods: { type: mongoose.Schema.Types.ObjectId, ref: 'Goods' } }],

  // 장바구니
  cart: [{ cartGoods: { type: mongoose.Schema.Types.ObjectId, ref: 'Goods' } }],

  // 주문서
  order: [{ cartGoods: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' } }],
  
  // 관심사
  style: style,

  // 생성 시간
  createdAt: { type: Date, default: Date.now, }
});

module.exports = mongoose.model('User', userSchema);