# JavaScript for Node.js

### Asynchronous Programming

- Synchronous means 'dependend' or 'connected'
    - ``` Synchronous means that the code is executed line by line, one statement at a time. ```
    - Two synchronous tasks must be aware of one another
    - One task must execute in such way that is dependent on the other task.
    - e.g. waiting for start untill the other task is completed.
- Asynchronous means totally 'independend'
    - ```Asynchronous means that the code can run in parallel, without waiting for the previous statement to finish.```
    - Here tasks do not consider the execution of other tasks, either in the initiation or in execution.
    - It enables your program to start a potentially long-running task and still be able to be responsive to other taks while that task runs, rather than having to wait until that task has finished

### JavaScript
- JavaScript is a programming language that can be both synchronous and asynchronous.
- By default, JavaScript is synchronous and single-threaded
-  However, JavaScript can also use features such as callbacks, promises, and async/await to handle asynchronous operations
- These features allow JavaScript to perform tasks that may take a long time, such as fetching data from an API, without blocking the rest of the code.



## Callbacks

- A callback is just the function that passed to another function as argument
-  A callback function can run after another function has finished

#### Example:
```
function add(a, b, callback) {
    let result = a + b;
    callback(result);
}

function displayResult(result) {
    console.log("The result is: " + result);
}

add(5, 10, displayResult);

```

#### Problem with Callbacks

- Sometimes When we call callbacks inside callbacks, we get a deeply nested program structure, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).
- For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise



## Timers

### setTimeout() global function
```
The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
```
- Syntax:
    - setTimeout(functionRef, delay)
- setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack

#### Example
```
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

#### 'this' problem
- setTimeout() is global function, hence setting the 'this' keyword inside it, will refers to the 'window' or 'global' object.
     ```
    const myArray = ["zero", "one", "two"];
    myArray.myMethod = function (sProperty) {
        console.log(arguments.length > 0 ? this[sProperty] : this);
    };

    myArray.myMethod(); // prints "zero,one,two"
    myArray.myMethod(1); // prints "one"
    
    setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second

    ```
- You can use bind() to set the value of this for all calls to a given function

    ```
    const myArray = ["zero", "one", "two"];
    const myBoundMethod = function (sProperty) {
    console.log(arguments.length > 0 ? this[sProperty] : this);
    }.bind(myArray);

    myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
    myBoundMethod(1); // prints "one"

    setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
    ```

