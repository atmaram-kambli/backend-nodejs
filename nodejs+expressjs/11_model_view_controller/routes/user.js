const express = require('express');

const router = express.Router();
const { handleGetAllUsers, handleGetUserById, handleCreateNewUser, handleDeleteUserById  } = require('../controllers/user')


router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router.route('/:id')
    .get(handleGetUserById)
    .delete(handleDeleteUserById)



module.exports = router;