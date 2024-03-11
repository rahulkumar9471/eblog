const express = require('express');
const app = express();
const dbConnect = require("./config/connection");
dbConnect();
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());    

const blog = require("./routes/blog");

app.use("/api/v1", blog);



app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}!`);
});

app.get('/', (req, res) => {
  res.send('Home Page !');
});