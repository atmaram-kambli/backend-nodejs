# JavaScript for Nodejs - part 02

- In JavaScript, a Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value
- Promises are used to handle asynchronous operations such as fetching data from a server, reading a file, or waiting for a user input

- A promise may have one of three states.
    - Pending
    - Fulfilled
    - Rejected

- A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.

### Create a Promise

To create a promise object, we use the Promise() constructor.
```
let promise = new Promise(function(resolve, reject){
     //do something
});

```

- The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

- If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.


### JavaScript Promise Chaining
- You can perform an operation after a promise is resolved using methods then(), catch() and finally().

#### then() method
- The then() method is used with the callback when the promise is successfully fulfilled or resolved.
- The syntax of then() method is:

    ```
    promiseObject.then(onFulfilled, onRejected);
    ``` 

- You can chain multiple then() methods with the promise.

#### catch() method
- The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

#### finally() method
- You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected. For example,

### Example 
```

api().then(function(result) {
    return api2() ;
}).then(function(result2) {
    return api3();
}).then(function(result3) {
    // do work
}).catch(function(error) {
    //handle any error that may occur before this point 
});
```

#### Promises Methods
<table>
<tbody>
    <tr>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>all(iterable)</td>
        <td>Waits for all promises to be resolved or any one to be rejected</td>
    </tr>
    <tr>
        <td>allSettled(iterable)</td>
        <td>Waits until all promises are either resolved or rejected</td>
    </tr>
    <tr>
        <td>any(iterable)</td>
        <td>Returns the promise value as soon as any one of the promises is fulfilled</td>
    </tr>
    <tr>
        <td>race(iterable)</td>
        <td>Wait until any of the promises is resolved or rejected</td>
    </tr>
    <tr>
        <td>reject(reason)</td>
        <td>Returns a new Promise object that is rejected for the given reason</td>
    </tr>
    <tr>
        <td>resolve(value)</td>
        <td>Returns a new Promise object that is resolved with the given value</td>
    </tr>
    <tr>
        <td>catch()</td>
        <td>Appends the rejection handler callback</td>
    </tr>
    <tr>
        <td>then()</td>
        <td>Appends the resolved handler callback</td>
    </tr>
    <tr>
        <td>finally()</td>
        <td>Appends a handler to the promise</td>
    </tr>
</tbody>
</table>


## Javscript async/await

- We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

- The syntax of async function is:

    ```
    async function name(parameter1, parameter2, ...paramaterN) {
        // statements
    }
    ```

- The await keyword is used inside the async function to wait for the asynchronous operation.
- The syntax to use await is:
    ```
    let result = await promise;
    ```
-The use of await pauses the async function until the promise returns a result (resolve or reject) value


#### Example
```
// a promise
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('hello');
}

// calling the async function
asyncFunc();
```
'hello' is displayed only after promise value is available to the result variable.

In the above program, if await is not used, hello is displayed before 'Promise resolved'

- You can use await only inside of async functions.

## JavaScript Closures
- In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
- JavaScript closure helps in the data privacy of the program

#### Example
    ```
    let a = 0;
    function sum() {
        function increaseSum() {

            // the value of a is increased by 1
            return a = a + 1;
        }
        return increaseSum;
    }

    const x = sum();
    console.log(x()); // 1
    console.log(x()); // 2
    console.log(x()); // 3
    a = a + 1;
    console.log(a); // 4
    ```