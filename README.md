
# User Service

```
https://umhelp-users-api-service.heroku.com/
````

GET /user
POST /user
PUT /user
DELETE /user

you can filter and access deep properties

```
GET /user?id=1&name=Fulano
GET /user?loan.active=true
```

more information: https://www.npmjs.com/package/json-server

# Investment Service

```
https://umhelp-investment-api-service.heroku.com/
```

POST /investment/:idInvestor/:quantity/:category
POST /loan/:clientId/:amount/:parcels

GET /bagbank/:clientId
POST /bagbank/:clientId/:amount
