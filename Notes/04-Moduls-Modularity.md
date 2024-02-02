# Modules and Modularity

- Node.js is a modular platform
- Modules are the way to organize the code into smaller and reusable pieces
- node.js, modules are implemented as separate files that can be imported into other files using the require() function
- This allows developers to write code that is easier to maintain and reuse.

#### Example
- For example, if you have a file called 'math.js' that contains some math functions, you can export those functions using the module.exports object. Then, in another file, you can import those functions using the 'require() function'.
- Here’s an example:

1. math.js
    ```
    function add(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }

    module.exports = {
    addition: add,
    subtraction: sub,
    product: mul
    };
    ```

2. app.js
    ```
    const calculator = require('math.js')

    calculator.add(23, 34);
    // output: 57
    ```