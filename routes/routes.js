const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World, This is the backend part');
});

router.get('/products', (req,res) =>{
    res.send('Products');
})

router.get('/admin', (req,res) =>{
    res.send('Admin');
})

module.exports = router;