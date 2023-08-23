const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


app.get("/",(req , res) => {
    res.download("../Resume/jigar-makwana.pdf");
});
app.get("/mail");

app.listen(8000,() => {
    console.log("Connected");
});
