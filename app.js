const express = require('express');
const bodyParser = require('body-parser');

const Files = require("./controller/Files")

const PORT = 5000



const app = express();

app.use(bodyParser.json());

app.get("/create-file", Files.createFile)
app.get("/get-files", Files.getFiles)

app.listen(PORT, () => console.log("App is listening"))