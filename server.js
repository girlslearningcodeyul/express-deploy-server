var express = require('express')
var app = express()
app.get ('/', (req, res) => {
    res.send("Javascript boulders!");
})
app.listen(3001);