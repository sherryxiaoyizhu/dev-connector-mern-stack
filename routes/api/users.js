
const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const User = require('../../models/user');

// @route GET api/users
// @desc  Register user
// @acess Public

router.post('/', [

    // Add middlewares
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })

], async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() }); // 400: Bad Request
    }
    
    const { name, email, password }  = req.body;

    try {
        // Check if user already exists
        let user = await User.findOne({ email });
        if(user) {
            return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
        }

        // Get user's gravatar
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm' // Gets a default image
        });

        // Create a new user instance
        user = new User({
            name,
            email,
            avatar,
            password
        });

        // Encrypt password
        const salt = await bcrypt.genSalt(10); // the greater the number is, the more secure
        user.password = await bcrypt.hash(password, salt);

        // Save the user
        await user.save();

        // Return jsonwebtoken - in order to get the user logged in right away when registered
        const payload = {
            user: {
                id: user.id
            }
        }
        
        jwt.sign(
            payload, 
            config.get('jwtSecret'),
            { expiresIn: 360000 }, // to be updated before launch in production
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
        ); 

    } catch(err) {

        console.error(err.message);
        res.status(500).send('Server error');

    }
});

module.exports = router;