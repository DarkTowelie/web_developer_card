let express = require('express');
let app = express();
app.use(express.static('public'));

app.get('/', function (req, res){
    return res.sendFile(__dirname +'/public/main.html');
})

app.listen(3001, function(){
    console.log('Server listening at http://localhost:3001');
})