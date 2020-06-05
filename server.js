var soap = require('soap');
var http = require('http');

var service = {
    ws: {
        calc: {
            decimalToBinary : function(args) {
                var str = args.a;
                var bin = (+str).toString(2);
                return { binary : bin };
            },

            binaryToDecimal: function(args){
                var dec = parseInt(args.a, 2);
                return { decimal : dec};
            }

        }
    }
}

var xml = require('fs').readFileSync('wsbinary.wsdl', 'utf8'),

server = http.createServer(function(request,response) {
    response.end("404: Not Found: "+request.url);
    console.log('ouvindo')
});

server.listen(8000);
soap.listen(server, '/wsbinary', service, xml);