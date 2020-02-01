const express = require('express');
const router = express.Router();

//rutas
router.get('/', (req, res) => {
  //res.end('Hello World!');
  res.render('index');
});

router.get('/login', (req,res) =>{
  //res.end('Aqui va el login!');
  res.render('login');
});

module.exports = router;
