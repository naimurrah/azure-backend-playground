const express = require("express");
const cors = require("cors");

require('dotenv').config()

const app = express();
const PORT_NUM = process.env.APPSETTING_SERVER_PORT || 8080;

app.use(express.json());

mongoose.set('strictQuery', true);
app.use(cors());

app.listen(PORT_NUM,  async () => {
    res.send(process.env)
});

app.get("/", (req, res) => {
    res.json({test:"klflkaf"});
});

