const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello World!" });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));

module.exports = server;