# Middleware

- Middleware functions are the functions that have access to the request object, response object and the next function in the application's request-response cycle


#### Middleware functions can perform following tasks

1. can execute any code
2. can make changes to the request and response object
3. End the request-response cycle
4. call the next middleware in the stack


#### Definition

- A middleware function takes three argumenst as (req, res, next)
- example

```
    const myLogger = function (req, res, next) {
        console.log('LOGGED')
        next()
    }
```

- To load the middleware function, app.use() is used

```
    app.use(myLogger)
```

##### The order of middleware loading is important: middleware functions that are loaded first are also executed first.