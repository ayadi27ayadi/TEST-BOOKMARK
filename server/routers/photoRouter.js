const express = require('express');
const { createPhoto, getPhotos, getPhoto, updatePhoto, deletePhoto } = require('../controllers/photoController');

const router = express.Router();

router.post('/',createPhoto);
router.get('/', getPhotos);
router.get('/:photoId', getPhoto);
router.put('/:photoId', updatePhoto);
router.delete('/:photoId', deletePhoto);

module.exports = router