const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk melayani file statis
app.use(express.static('public'));

// Endpoint untuk halaman utama
app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Dynamic Node.js Website!</h1><p>This website is powered by Node.js and Nginx.</p>');
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
