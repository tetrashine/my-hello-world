const express = require('express');

const app = express();
const port = process.env.EXPRESSPORT || 8080;

app.use('/', (req, res, next) => {
   res.send('Hello World!');
});

app.listen(port, () => console.log(`Running a GraphQL API server listing on port ${port}...`));