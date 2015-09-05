var express 	= require('express'),
    bodyParser  = require('body-parser'),
    http        = require('http'),
    api 		= require('./service/services');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 3001);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});
// JSON API
app.get('/serverCoutchBD', api.getAll);
app.get('/serverCoutchBD/:id', api.getId);
app.post('/serverCoutchBD', api.postAdd);
app.put('/serverCoutchBD', api.putUpdate);
app.delete('/serverCoutchBD/:id',api.removeDoc);

server.listen(app.get('port'), function() {
    console.log('✔︎︎ Express server listening on http://localhost:%d/'.green, app.get('port'));
});