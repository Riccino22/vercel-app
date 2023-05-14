const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("port", process.env.PORT || 3030)

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(app.get("port"), () => {
    console.log('Server started on port: ' + app.get("port"));
})