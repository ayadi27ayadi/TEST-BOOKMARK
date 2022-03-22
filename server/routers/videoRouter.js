const express = require('express');
const { createVideo, getVideo, getVideos, updateVideo, deleteVideo } = require('../controllers/videoController');
const { verifyToken } = require('../middelwares/verifyToken.js');

const router = express.Router();

router.post('/',verifyToken,createVideo);
router.get('/', getVideos);
router.get('/:videoId', getVideo);
router.put('/:videoId',verifyToken, updateVideo);
router.delete('/:videoId',verifyToken, deleteVideo);

module.exports = router