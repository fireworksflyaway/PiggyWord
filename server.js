/**
 * Created by ImageDBUser on 2017/3/13.
 */
// server.js
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express()
var userService=require('./server/user')

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());


app.get('/confirmTokenServer',userService.confirmToken);
app.post('/signInServer',userService.signIn);
app.post('/signUpServer',userService.signUp);

//send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


var PORT = process.env.PORT || 8091
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
});