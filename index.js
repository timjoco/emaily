const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send({ bye: 'friend' });
});

// Boolean statement for nodeJS environment port OR port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
