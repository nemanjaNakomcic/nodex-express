const express = require('express');

const PORT = 3002;

const app = express();

app.get('/test', (req, res) => {
    res.json({data: 'This is data for test purpose'})
})

app.get('/test-query/:name', (req, res) => {
    res.json({test: `Hello ${req.params.name}`})
})

app.listen(PORT, () => console.log(`Server is now listening on port ${PORT}`))