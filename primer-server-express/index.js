const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');
const routesApi = require('./routes-api');

//settings
app.set('appName','Mi primer server');
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

//middlewares
app.use(morgan('combined'));

app.use((req,res,next) => {
  //console.log('Ha pasado por esta funcion en :' + req.url);
  next();
});

//rutas
app.use(routes);

//api
app.use('/api', routesApi);

//ruta por defecto...
app.get('*', (req,res) =>{
  res.end('ola k ase');
});

//servidor web
app.listen(3000, function () {
  console.log('servidor funcionando!');
  console.log('Nombre de la App: ',app.get('appName'));
});
