
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var actions = require('./routes/actions');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.post('/actions/volume_up', actions.volume_up);
app.post('/actions/volume_down', actions.volume_down);
app.post('/actions/power_off', actions.power_off);
app.post('/actions/power_on', actions.power_on);
app.post('/actions/source_71', actions.source_71);
app.post('/actions/source_optical', actions.source_optical);
app.post('/actions/source_line', actions.source_line);
app.post('/actions/sub_up', actions.sub_up);
app.post('/actions/sub_down', actions.sub_down);
app.post('/actions/toggle_late_night', actions.toggle_late_night);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
