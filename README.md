# BASE URI: http://3.212.182.137:3001

<img src="./readmeImg/FluffMainLogo.png" width="40%"/>

This project is admin page what is upload dumy data.\
if you want using this api, you need read this reference.
\
\
[]()
# Usage
## 상품 등록
> applicaion/json
```http
POST api/goods
```
\
[]()
**Request**
> body
```json
{
    "goodName": "상품 이름",
    "email": "이메일",
    "comment": "상품 한줄 평",
    "color": ["red, blue"],
    "category": "outer",
    "gender": "m",
    "size": "xxlg",
    "price": 20000,
    "grade": 10,
    "condition": 10,
    "style": ["pretty", "sporty"]
}
```
![image]()
\
[]()
**Response**
> Success
```json
{
    "code": 200,
    "json": {
        "success": true,
        "message": "Goods를 Database에 저장했습니다.",
        "data": {
            "goodName": "상품 이름",
            "comment": "상품 한줄 평",
            "color": ["red, blue"],
            "category": "outer",
            "gender": "m",
            "size": "xxlg",
            "price": 20000,
            "grade": 10,
            "condition": 10,
            "style": ["pretty", "sporty"],
            "img": ["image URI", "image URI"],
            "createAt": "생성 시간",
         }
    }
}
```
\
[]()
> Fail: Database 저장 오류
```json
{
    "code": 403,
    "json": {
        "success": false,
        "message": "Database 저장에 실패했습니다..",
    }
}
```
> Fail: 서버 내부 오류
```json
{
    "code": 500,
    "json": {
        "success": false,
        "message": "서버 내부오류 발생",
    }
}
```
\
[]()

---

\
\
[]()
## email 목록확인
> applicaion/json
```http
GET api/userList
```

\
[]()
**Response**
> Success
```json
{
    "code": 200,
    "json": {
        "success": true,
        "message": "userList 조회 성공",
        "data": [
            {
                "_id": "5e0a3d33217f2200119b6036",
                "email": "21ewfefewfew"
            },
            {
                "_id": "5e0a416f217f2200119b6037",
                "email": "plan@sopt.org"
            },
            {
                "_id": "5e0a4352217f2200119b603c",
                "email": "98_02@naver.com"
            },
            {
                "_id": "5e0a4459217f2200119b6041",
                "email": "soar_dy@naver.com"
            },
            {
                "_id": "5e0a4763217f2200119b6042",
                "email": "girlcrush@naver.com"
            },
            {
                "_id": "5e0a483c217f2200119b6046",
                "email": "ooeunz@naver.com"
            },
            {
                "_id": "5e0a4ac2217f2200119b604a",
                "email": "hjm97@naver.com"
            },
            {
                "_id": "5e0a4b01217f2200119b604c",
                "email": "hojune00@naver.com"
            }
        ]
    }
}
```




