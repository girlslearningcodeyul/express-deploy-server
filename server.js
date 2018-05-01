var express = require('express')
var app = express()
app.get ('/', (req, res) => {
    res.send("Javascript rocks!");
})
app.listen(3001);