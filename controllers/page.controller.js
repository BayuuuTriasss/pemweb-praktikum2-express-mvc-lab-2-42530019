const daftarMobil = [
    { id: 1, nama: 'Toyota Alphard', tipe: 'Luxury MPV', kursi: 7, hargaPerHari: 1550000, tersedia: true },
    { id: 2, nama: 'Hiace', tipe: 'Van', kursi: 16, hargaPerHari: 750000, tersedia: true },
    { id: 3, nama: 'Innova Reborn', tipe: 'MPV', kursi: 6, hargaPerHari: 500000, tersedia: true },
    { id: 4, nama: 'Honda HRV', tipe: 'SUV', kursi: 4, hargaPerHari: 300000, tersedia: true }
];

exports.getHome = (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Beranda',
        userName: 'Para Pencari Mobil',
        fiturList: ['Armada terawat dan bersih', 'Harga transparan perhari', 'Pemesanan online mudah']
    });
};

exports.getAbout = (req, res) => {
    res.render('pages/about', { pageTitle: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', { pageTitle: 'Katalog Mobil', mobilList: daftarMobil });
};

exports.getTambahSewa = (req, res) => {
    res.render('pages/tambah', {
        pageTitle: 'Sewa',
        jenisMobilList: ['Toyota Alphard', 'Hiace', 'Innova Reborn', 'Honda HRV']
    });
};

exports.postTambahSewa = (req, res) => {
    console.log('\n[BACK-END] Menerima Payload POST:');
    console.log(req.body);

    res.redirect('/katalog');
};