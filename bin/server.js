const app = require('../app');
const http = require('http');

const port = normalizaPorta(process.env.PORT || '3000');

app.set('port',port);

const server = http.createServer(app);
server.listen(port);

console.log(port);

function normalizaPorta(val){

    const port = parseInt(val,10);
    
    if(isNaN(port)){
        return val;
    }

    if(port >= 10){
        return port;
    }

    return false;
}