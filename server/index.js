const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
const port = 3000

const generateToken = (username) => {
    const token = jwt.sign(username, secret, { expiresIn: '12h'})

    return token
}

const authenticateJwt = (req, res, next) => {
    const auth = req.header.authentication
    
    if(auth){
        const token = auth.split(' ')[1]
        jwt.verify(token, secret, (err, data) => {
            if(err){
                req.status(403).json({message: "You have been forbidden"})
            } else{
                req.user = data
                req.status(201).json({message: "You have the access of the content"})
            }
        })
    } else{
        req.status(403).json({message: "Incorrect username or password"})
    }
}

app.post('/signup', (req, res) => {
    res.send('Hello World!')
  })

app.post('/login', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})