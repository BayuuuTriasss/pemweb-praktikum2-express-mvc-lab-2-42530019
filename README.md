# Rental Mobil Merdeka

Aplikasi web sederhana untuk katalog dan pemesanan sewa mobil, dibangun dengan **Express.js** dan **EJS** menggunakan pola **Model-View-Controller (MVC)**.
Dibuat untuk Praktikum Pemrograman Web (Praktikum 2).

- **Nama:** Komang Bayu Trias Gautama
- **NIM:** 42530019

## Fitur

| Halaman | Rute | Keterangan |
|---|---|---|
| Beranda | `GET /` | Menyambut pengguna dengan data dinamis dari controller |
| Tentang Kami | `GET /about` | Halaman statis |
| Katalog Mobil | `GET /katalog` | Daftar mobil (Alphard, Hiace, Honda WR-V, Innova Reborn) dari array object, dirender dengan `forEach` |
| Pesan Sewa | `GET /tambah` | Form dengan input teks, angka, dan dropdown |
| Kirim Pesanan | `POST /tambah` | Mencetak `req.body` ke terminal, lalu redirect ke `/katalog` (pola PRG) |

## Struktur Proyek

```
├── app.js                  # Inisialisasi aplikasi dan middleware
├── routes/
│   └── page.routes.js      # Konfigurasi endpoint
├── controllers/
│   └── page.controller.js  # Logika eksekusi
├── views/
│   ├── pages/              # home, about, katalog, tambah
│   └── partials/           # header, footer
└── public/css/style.css    # Reset CSS dan Box Model
```

## Cara Menjalankan

```bash
npm install
npm run dev      # dengan nodemon

```

Buka `http://localhost:3000`.

## Bahasa dan Package

Node.js, EJS, nodemon.

## Konsep yang Dipraktikkan

- Pemisahan tanggung jawab dengan MVC
- Template EJS: `include` partial, `<%= %>`, dan loop `forEach`
- Middleware `express.urlencoded` untuk membaca `req.body`
- Post-Redirect-Get (PRG) untuk mencegah pengiriman ulang form
- Error `EADDRINUSE` saat dua proses memakai port yang sama