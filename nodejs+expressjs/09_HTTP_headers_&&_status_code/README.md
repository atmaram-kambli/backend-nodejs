# HTTP Headers

- HTTP Headers are the important part of the API request and response as they represent the meta-data associated with the API request and response.

- the response header can be set by using :
```
    res.respond({header_type: "header_value"})
```

#### real life example secanio
- Think of post service where one person send post in the form of envelope to the other person
- These envelope contains all message inside it; but it also contains some additional info about the sender, receiver, etc on the envelope cover
- This extra info is nothing but the Headers in the context of HTTP request, response cycle




# HTTP status code

- HTTP status codes indicate whether a specific HTTP request has been successfully processed.

1. Informational responses : (100 - 199)
2. Successfull responses : (200 - 299)
3. Redirectional responses : (300 - 399)
4. Client side error messages : (400 - 499)
5. Server side error messages : (500 - 599)

