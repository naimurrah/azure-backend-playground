const express = require("express");
const cors = require("cors");

require('dotenv').config()

const app = express();
const PORT_NUM = process.env.APPSETTING_SERVER_PORT || 8000;

app.use(express.json());

app.use(cors());

app.listen(PORT_NUM,  async () => {
    console.log("This works at port " + PORT_NUM);
    console.log(process.env);
});

app.get("/", (req, res) => {
    res.send("process.env")
});

