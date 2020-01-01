# BASE URI: http://3.212.182.137:3000

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