const express = require('express');
const User = require('../users/user.model');
const router = express.Router();


// User Stats by email
router.get('/user-stats/:email', async(req, res) => {
    const {email} = req.params;
    if(!email) {
        return res.status(400).send({message: 'Email is required'});
    }

    try {
        const user = await User.findOne({email: email})
        console.log(user)
        
    } catch (error) {
        console.error('Error fetching user stats', error);
        res.status(500).send({message: 'Failed to fetch user stats'})
    }
})