const express = require('express');
const app = express();
const PORT = 3000;
const pageroutes = require('./routes/page.routes');

// Konfigurasi View Engine
app.set('view engine', 'ejs');

// Middleware untuk mengatur folder public dan body parser
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Menggunakan routing untuk halaman
app.use('/', pageroutes);

app.use((req, res) => {
  res.status(404).render('pages/about', { pageTitle: 'Tidak Ditemukan' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});