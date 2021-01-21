const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

// routes
app.get('/', async (req, res) => {
    res.json('API works fine !!!');
});

app.listen(port, () => console.log(`Server listening on port: ${port} ...`));