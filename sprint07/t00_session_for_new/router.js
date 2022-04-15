const {Router, response} = require('express');
const session = require('express-session');
const router = Router();

router.get('/', (req, res) => {
    if(req.session.content){
        let html = "";
        for (const [key, value] of Object.entries(req.session.info)) {
            html += `<h2>${key}: ${value}</h2>`;
        }
        html += '<form action="/reset" method="post" >'
        html += "<input type='submit' value='Fogot'>"
        html += '</form>'
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.end(html);
    }else
        res.sendFile(__dirname +'/index.html');
});

router.post('/send', (req, res) =>{
    req.session.info = req.body;
    req.session.content = true;

    res.redirect('/');
})

router.post('/reset', (req, res) => {
    req.session.content = false;
    req.session.info = null;
    res.redirect('/');
})


module.exports = router;