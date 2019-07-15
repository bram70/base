const express = require('express')
const http = require('http')
const path = require('path')
var cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const apiRoutes = require('./api')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(apiRoutes)

app.set('port', process.env.SERVER_PORT || 8021)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express Server is listening on port" + app.get('port'));
})
