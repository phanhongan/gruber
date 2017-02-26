# gruber

POST /drivers
```
{
  "driver": {
    "name": "Nguyen Van A"
  }
}
```

POST /passengers
```
{
  "passenger": {
    "name": "Le Thi B"
  }
}
```

PUT /drivers/123/locations
```
{
  "location": {
    "lng": 10.776345,
    "lat": 106.686175
  }
}
```

PATCH /drivers/123
```
{
  "driver": {
    "state": "available"
  }
}
```

POST /requests
```
{
  "request": {
    "passenger_id": 123,
    "location": {
      "lng": 10,
      "lat": 106
    }
  }
}
```