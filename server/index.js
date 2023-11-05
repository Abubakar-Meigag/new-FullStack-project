const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const port = process.env.PORT || 8008;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
    res.send('Welcome to my now server on port' + port)
});