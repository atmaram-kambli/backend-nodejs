const express = require("express");
const fs = require('fs');
const usersData = require('./MOCK_DATA.json')


const app = express();
const PORT = 8000;


// Middleware
app.use(express.urlencoded({extended : false}))


// SSR - Server Side Rendering
app.get('/users', (req, res) => {
    const html = `<h1>All Users List</h1>
        <ul>${usersData.map((user) => {
            return `<li>${user.first_name}</li>`
        }).join("")}</ul>
    `    ;
    return res.send(html);
})

// REST api
// 1. Get all users
app.get("/api/users", (req, res) => {
    return res.json(usersData);
})

// 2. Get specific user with id 
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id)
    return res.json(usersData.find((user) => user.id === id));
})


// 3. create new user 
app.post('/api/users', (req, res) => {
    const body = req.body;
    // console.log(body)
    usersData.push({...body, id:usersData.length+1});
    fs.writeFile("./MOCK_DATA.json",  JSON.stringify(usersData), (err, data) => {
        if(err) {
            return res.json({status: 501, message: "Interval Server Error"})
        }
        return res.json({status: 200, message: "New User is succesfully created!"})
        
    })
})


// 4. Updatr user with id 
app.put('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    // console.log(id)    
    const body = req.body;
    // console.log(body)
    let user = usersData.find((user) => user.id === id);

    
    // const newUsersData = { ...usersData, {  } }
    if(user) {
        user = {...user, ...body};
        // console.log(user)
    }

    const newUsersData = usersData.filter((user) => (user.id != id));
    newUsersData.push(user)
    
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsersData), (err, data) => {
        if(err) {
            return res.json({status: 501, message: "Interval Server Error"})
        }
        return res.json( { status: 200, message: `User with ${id} is updated successfully` } )
    })

})

// 5. Delete user with id 
app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    // console.log(id)    
    const newUsersData = usersData.filter((user) => (user.id != id));

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(newUsersData), (err, data) => {
        if(err) {
            return res.json({status: 501, message: "Interval Server Error"})
        }
        return res.json( { status: 200, message: `User with ${id} is deleted successfully` } )
    })

})


app.listen(PORT, () => {
    console.log("App is listening of PORT " + PORT);
})