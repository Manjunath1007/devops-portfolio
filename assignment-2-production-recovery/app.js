const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Account Service Running");
});

app.listen(3000, () => console.log("Account Service on port 3000"));
