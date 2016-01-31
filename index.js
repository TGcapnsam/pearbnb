var express = require('express')
<<<<<<< HEAD
var fs = require('fs')
var app = express()


=======
var app = express()

>>>>>>> 01262b640c76f95c4aa95a0fb8cd44741d8cc5bc
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
<<<<<<< HEAD

  var buf = new Buffer(fs.readFileSync('index.html'))

  response.send(buf.toString())
=======
  response.send('Hello World!')
>>>>>>> 01262b640c76f95c4aa95a0fb8cd44741d8cc5bc
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
