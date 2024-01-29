
# Template Engine 
```
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.
```

```
Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
```


# ejs - Embedded Javascript templating

```
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

```

### Refer this git repository: 
<a>https://github.com/mde/ejs/wiki/Using-EJS-with-Express</a>
<a>https://ejs.co/#docs</a>


### Setting up the application setting properties
- views, the directory where the template files are located. Eg: app.set('views', './views'). 
- This defaults to the views directory in the application root directory.
view engine, the template engine to use. 
- For example, to use the njs template engine: 

```
app.set('view engine', 'njs').
```


Create a njs template file named index.njs in the views directory, with the following content:

```
<html>
   <body>
      Hello <%= foo %>
   </body>
</html>
```

```
let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {foo: 'FOO'});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
```

### Includes
Includes are relative to the template with the include call. (This requires the 'filename' option.) For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use <%- include('user/show'); %>.

You'll likely want to use the raw output tag (<%-) with your include to avoid double-escaping the HTML output.
```
<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>
```
