const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');

//middle ware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api', apiRoutes);

//default response for any request not found
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
})