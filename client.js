const soap = require('soap');
const url = 'http://localhost:8000/wsbinary?wsdl';

soap.createClient(url, function(err, client) {

    if(err) return console.log(err);

    else {

        client.decimalToBinary({ a: 6}, function(err, result) {
            if(err) return console.log(err);
            else console.log(result);
        });

        client.binaryToDecimal({ a: "1101"}, function(err, result) {
            if(err) return console.log(err);
            else console.log(result);
        });
        
    }  
})

