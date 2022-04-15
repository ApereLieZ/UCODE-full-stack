const express = require('express');
let cookieSession = require('cookie-session');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

app.use(cookieSession({
  name: 'session',
  keys: ["key1", "key2"],
  maxAge: 60000
}));

app.get('/', function (req, res, next) {
    req.session.views = (req.session.views || 0) + 1;
    res.end(`
  <h1>Cookie counter</h1>
  <p>This page was loaded ${req.session.views} time(s) in last minute`);
  next();
});

app.listen(3000,"127.0.0.1",function(){
    console.log("Open http://127.0.0.1:3000/ \n");
});