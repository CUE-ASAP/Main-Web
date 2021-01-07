const Users = require('../models/userModal')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SendmailTransport = require('nodemailer/lib/sendmail-transport')

const {CLIENT_URL} = process.env

const userCtrl = {
    register: async (req, res) => {
        try{
            const {name, email, password} = req.body

            if(!name || !email || !password)
                return res.status(400).json({ msg: 'Please enter all fields!' });
            
            if(!validateEmail(email))
                return res.status(400).json({ msg: 'Invalid Email ID!' });

            const user = await Users.findOne({email})
            if(user) 
                return res.status(400).json({ msg: 'Email ID already exists!' });
            
            if(password.length < 8)
                return res.status(400).json({ msg: 'Password must be at least 8 characters!' });
            
            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = {
                name, email, password: passwordHash
            }
            
            const activation_token = createActivationToken(newUser)

            const url = `${CLIENT_URL}/user/activate/${activation_token}`
            //sendMail(email, url)

            res.json({msg: "Register Success! Please activate your email account."})
        }catch(err){
           return res.status(500).json({msg: err.message}) 
        }
    }
}

// Email Validation
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Create Activation Token
const createActivationToken = (payload) => {
    return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {expiresIn: '5m'})
}

const createAccessToken = (payload) => {
    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}
const createRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = userCtrl;