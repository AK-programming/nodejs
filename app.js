const express = require('express');
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { res.send('I am Muhammad Afnan KhanI have deployed this Node.js application on AWS EC2.');
});
app.get("/api/f1", (req, res) => {
    res.send("Welcome to Feature-1");
});
app.get("/api/gh", (req, res) => {
res.send("Github Actions deployed successfully");
});
app.get("/api/health", (req, res) => {
    res.json({ status: "ok", server: os.hostname(), node: process.version });
});
app.get("/api/prices", (req, res) => {
    res.json({ currency: "PKR per kg", prices: prices });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`SabziCart API listening on 127.0.0.1:${PORT}`);
});