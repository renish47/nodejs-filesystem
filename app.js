const express = require('express');
const bodyParser = require('body-parser');

const Files = require("./controller/Files")



const app = express();

app.use(bodyParser.json());

app.get("/create-file", Files.createFile)
app.get("/get-files", Files.getFiles)

app.listen(3000, () => console.log("App is listening to port 3000"))