## install

```
$ npm install
```
## start
Make sure MongoDB run on currect hostname and port
```
$ npm start

output:
server listerning at port: 8080
Mongoose connected mongodb://localhost:27017/usersdb
```

## Run APIs
**ping-pong**
```
curl -X GET \
  http://localhost:8080/api/ping

output: pong!
```

**register new user**
```
curl -X POST \
  http://localhost:8080/api/register \
  -H 'content-type: application/json' \
  -d '{"username": "vishal",
	"email": "vishal@vb.com",
	"password": "123456"
}'

output:
{
    "response": true,
    "message": {
        "__v": 0,
        "updatedAt": "2019-11-24T18:02:33.574Z",
        "createdAt": "2019-11-24T18:02:33.574Z",
        "username": "vishal",
        "password": "123456",
        "email": "vishal@vb.com",
        "_id": "5ddac5b95741413354b3355f"
    }
}
```

**login**
```
curl -X POST \
  http://localhost:8080/api/login \
  -H 'content-type: application/json' \
  -d '{
	"email": "vishal@vb.com",
	"password": "123456"
}'

output:
{
    "response": true,
    "message": {
        "_id": "5ddac5b95741413354b3355f",
        "updatedAt": "2019-11-24T18:02:33.574Z",
        "createdAt": "2019-11-24T18:02:33.574Z",
        "username": "vishal",
        "password": "123456",
        "email": "vishal@vb.com",
        "__v": 0
    }
}
```

**remove user**
```
curl -X POST \
  http://localhost:8080/api/remove \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 70a5e545-ca50-e386-c5dc-17a49593208f' \
  -d '{
	"email": "vishal@vb.com"
}
'

output: 
{
    "response": true,
    "message": {
        "n": 1,
        "ok": 1
    }
}
```

**modify user**
```
curl -X POST \
  http://localhost:8080/api/modify \
  -H 'content-type: application/json' \
  -d '{
	"email": "vishal@vishal.com",
	"setObject": {
		"username": "kuchbhi_hosktahai"
	}
}

output:
{
    "response": true,
    "message": {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
}
```

**get all users**
```
curl -X GET \
  http://localhost:8080/api/getall 


output:

{
    "response": true,
    "message": [
        {
            "_id": "5ddabc988e90a02bb8cc7064",
            "updatedAt": "2019-11-24T18:12:07.392Z",
            "createdAt": "2019-11-24T17:23:36.621Z",
            "username": "kuchbhi_hosktahai",
            "password": "vishal",
            "email": "vishal@vishal.com",
            "__v": 0
        }
    ]
}
```
