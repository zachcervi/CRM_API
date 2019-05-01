const express = require('express');
const app = express();

const customers = require('./routes/customers');
const agents = require('./routes/agents');

app.use(express.json());
app.use('/api/customers', customers);
app.use('/api/agents', agents);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}....`);
});