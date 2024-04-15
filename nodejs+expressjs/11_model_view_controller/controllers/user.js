const User  = require('../models/user')

async function handleGetAllUsers(req, res)  {
    const allUsers = await User.find({});
    return res.status(200).json(allUsers);
}

async function handleGetUserById(req, res)  {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({Error: "User not found!"})
    return res.status(200).json(user);
}

async function handleDeleteUserById(req, res)  {
    const user = await User.findByIdAndDelete(req.params.id);
    if(!user) return res.status(404).json({Error: "User with given id not found!"})
    return res.status(200).json({status: "Success", msg: "User is deleted successfuly"});
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if(!body.firstName || !body.email) {
        return res.status(400).json({msg: "Invalid User Data"});
    }
    const newUser = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        age: body.age,
        jobTitle: body.jobTitle,
    })
       
    return res.status(201).json({msg: "New user is succesfully created!!", id:newUser._id});
    

    // console.log(newUser)
}



module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleCreateNewUser,
    handleDeleteUserById,
}