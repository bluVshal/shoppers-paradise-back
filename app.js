const express = require('express');
const app = express();
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

app.use('/', router);

app.listen(process.env.port || 65000);
console.log('app is listening to port', (process.env.port || 65000)); 