const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("./db.js");

const routes = require("./routes/route");

const app = express();

app.use(bodyparser());
app.use(cors({origin:"http://localhost:4200"}));

app.listen(3000,()=>{
    console.log("server started at port 3000");
})

app.use("/employees", routes);