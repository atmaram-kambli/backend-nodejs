# Middleware 

Middleware is basically a method that runs before every response of the site


### Documentation Definition: 

```
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.
```

#### syntax: 

```
app.use((req, res, next) => {
    <!-- Body -->
    <!-- we can modify the request object here -->
    next();
})
```

#### Application
```
Middleware functions can perform the following tasks:

Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware in the stack.
```

#### Types of Middleware
```
An Express application can use the following types of middleware:

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware
```

#### more about middleware

```
We can also use middleware specific to different router
```