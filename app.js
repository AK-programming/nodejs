const express = require('express');
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { res.send('I am Muhammad Afnan KhanI have deployed this Node.js application on AWS EC2.');
});
app.listen(port, () => { console.log('Server is running');
});
