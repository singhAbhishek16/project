var http = require('http');
var fs = require('fs');
http.createServer(function(request, response){

                  var url = request.url;
                    getStaticFileContent(response,'index.html','text/html');
        }
                  ).listen(8081);
console.log('The server is running on port 8081');
function getStaticFileContent(response, filepath, contentType){
    fs.readFile(filepath, function(error, data){
        if(error){
            response.writeHead(500,{'Content-Type':'text/plain'});
            response.end('500 - Server Error');
        }
        if(data){
            response.writeHead(200,{'Content-Type':'text/html'});
            response.end(data);
        }
    });
}
/*var http = require('http');
var url = 'http://127.0.0.1:50219/index.html';
var server = http.createServer(function(request,response){
    var request = require('request');
    request(url, function(err,res,body){
        console.log(body);
    response.write('The server is working');
    response.end();
    });
}).listen(8081);*/