var webServer = require('http').createServer(webServerHandler);
var io = require('socket.io').listen(webServer);
var fs = require('fs');

webServer.listen (8080);

function webServerHandler (req, res)
{
  fs.readFile (__dirname + '/index.html', loadHTML);
    
    function loadHTML (err, data)
    {
        if (err)
        {
            res.writeHead (500);
            return res.end ('Error loading index.html');
        }
        
        res.writeHead (200);
        res.end (data);
    }
}



io.sockets.on ('connection', socketConnectionHandler);

function socketConnectionHandler (socket)
{
  socket.on ('buttonClick', buttonClickHandler);
  //socket.emit('news', { hello: 'world' });
}

function buttonClickHandler (data)
{
  console.log ("Server:: [buttonClickHandler]");
}