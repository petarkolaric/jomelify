var express = require('express')
const fileUpload = require('express-fileupload')
var spawn = require( 'child_process' ).spawnSync
var command = '/root/.go/src/github.com/zikes/chrisify/chrisify'
var parameters = ['--faces', '/app/faces/', '--haar', '/root/.go/src/github.com/zikes/chrisify/haarcascade_frontalface_alt.xml', '/app/uploads/input.jpg'];

var app = express()

app.use(fileUpload())

app.post('/jomelify', function (req, res) {
  if (!req.files)
  return res.status(400).send('No files were uploaded.')

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let displayImage = req.files.displayImage

  // Use the mv() method to place the file somewhere on your server
  displayImage.mv('/app/uploads/input.jpg', function(err) {
    if (err)
    return res.status(500).send(err)

    var file = spawn(command, parameters).stdout

    res.setHeader('Content-Length', file.length);
    res.setHeader('Content-disposition', 'attachment; filename=jomelify.jpg');
    res.setHeader('Content-type', 'image/jpeg');
    res.write(file, 'binary');
    res.end();
  })


})

app.listen(3000, function () {
  console.log('Jomelify running on port 3000!')
})
