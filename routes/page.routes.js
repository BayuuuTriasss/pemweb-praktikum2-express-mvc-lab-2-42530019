const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.getHome);
router.get('/about', pageController.getAbout);
router.get('/katalog', pageController.getKatalog);
router.get('/tambah', pageController.getTambahSewa);
router.post('/tambah', pageController.postTambahSewa);

module.exports = router;
