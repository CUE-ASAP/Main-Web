const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

// User Model
const User = require('../../models/User');

// @route POST api/users
// @desc Register new user
// @access Public

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // Input(non-empty) validation
    if(!name || !email || !password){
        return res.status(400).json({msg: '* Please enter all fields'});
    }

    // Email Validation
    if (!validateEmail(email))
        return res.status(400).json({ msg: '* Invalid Email ID!' });

    // Password validation
    if (password.length < 8)
        return res.status(400).json({ msg: '* Password must be at least 8 characters!' });
    if (!pass_digit(password))
        return res.status(400).json({ msg: '* Password must include at least one digit!' });
    if (!pass_lowercase(password))
        return res.status(400).json({ msg: '* Password must include at least one lowercase!' });
    if (!pass_uppercase(password))
        return res.status(400).json({ msg: '* Password must include at least one uppercase!' });
    if (!pass_special_char(password))
        return res.status(400).json({ msg: '* Password must include at least one special character!' });
    if (!validatePassword(password))
        return res.status(400).json({ msg: '* Password must not contain white spaces!' });

    // Check for existing user
    User.findOne({email})
        .then(user => {
            if(user) return res.status(400).status({msg: '* User already exists'});

            const newUser = new User({
                name,
                email,
                password
            });

            // Create salt & hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err,hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {

                            jwt.sign(
                                { id: user.id },
                                process.env.JWTSECRET,
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        user: {
                                            id: user.id,
                                            name: user.name,
                                            email: user.email
                                        }
                                    });
                                }
                            )
                        });
                })
            })

        })

});

// Email Validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Password Validation
function pass_lowercase(password) {
    const re = /^(?=.*[a-z]).*$/;
    return re.test(password);
}

function pass_uppercase(password) {
    const re = /^(?=.*[A-Z]).*$/;
    return re.test(password);
}

function pass_special_char(password) {
    const re = /^(?=.*[@#$%^&+=]).*$/;
    return re.test(password);
}

function pass_digit(password) {
    const re = /^(?=.*[0-9]).*$/;
    return re.test(password);
}

function pass_no_white_space(password) {
    const re = /^(?=\\S+$).*$/;
    return re.test(password);
}

function validatePassword(password) {
    const re = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    return re.test(password);
}

module.exports = router;