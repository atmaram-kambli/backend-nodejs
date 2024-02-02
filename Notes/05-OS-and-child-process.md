# OS module

#### source: https://nodejs.org/docs/latest/api/os.html
- The node:os module provides operating system related utility methods and properties.
- can be accessed using:

    ```
    const os = require('node:os')
    ```

### Methods and properties

<table>
    <tr>
        <th>Name</th>
        <th>Operation</th>
    </tr>
    <tr>
        <td>os.arch()</td>
        <td>Returns the operating system CPU architecture</td>
    </tr>
    <tr>
        <td>os.cpus()</td>
        <td>Returns an array of objects containing information about each logical CPU core</td>
    </tr>
    <tr>
        <td>os.networkInterfaces()</td>
        <td>Returns an object containing network interfaces that have been assigned a network address</td>
    </tr>
    <tr>
        <td>os.platform()</td>
        <td>Returns a string identifying the operating system platform, e.g. android, linux</td>
    </tr>
    <tr>
        <td>os.totalmem()</td>
        <td>Returns the total amount of system memory in bytes as an integer</td>
    </tr>
    <tr>
        <td>os.freemem()</td>
        <td>Returns the amount of free system memory in bytes as an integer</td>
    </tr>
</table>

and many more..

check the offitial page: https://nodejs.org/docs/latest/api/os.html

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Child Process Module

- The child_process module enables us to access Operating System functionalities by running any system command inside a, well, child process

- There are four different ways to create a child process in Node: spawn(), fork(), exec(), and execFile().

- can be accessed by using:

    ```
    const cp = require('child_process');
    ```
- exec() method:
exec() method in JavaScript is used to test for the match in a string. If there is a match this method returns the first match else it returns NULL.

- Syntax:
    ```
    cp.exec(command[, options][, callback])
    ```
- Example
    ```
    cp.exec('start crome <link_url>') //open the website link
    ```
    ```
    cp.exec('calc') //open the calcultor app on system
    ```