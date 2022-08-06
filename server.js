const express = require('express');
const htmlRoutes = require('./Routes/html')
const apiRoutes = require('./Routes/API')
const app = express();
const PORT= process.env.PORT || 3001;


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(htmlRoutes);
app.use(apiRoutes);
app.listen(PORT,() => console.log('listening on' + PORT))