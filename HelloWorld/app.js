const express = require('express');

const port = 3089;
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}
);