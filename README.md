Listing API

## Run locally

```console
> cd listings-backend
> npm run start
```

go to: http://localhost:3000/listings

to run POST and DELETE operations
go to POSTMAN and use

POST
http://localhost:3000/listings
```json
{
    "title": "Test",
    "price": 2000,
    "description": "Brief test description"
}
```

DELETE
http://localhost:3000/listings/:id
