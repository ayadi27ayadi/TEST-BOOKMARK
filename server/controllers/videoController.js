const Video = require("../models/video")


const createVideo = async (req, res) => {
    const newVideo = new Video({
        lenght: req.body.lenght,
        height: req.body.height,
        duration: req.body.duration,
    });
    try {
      const savedVideo = await newVideo.save();
      return res.status(201).json(savedVideo);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  //get Video
const getVideos = async (req, res) => {
    try {
      const getVideos = await Video.find();
      return res.status(200).json(getVideos);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  //get video by id
const getVideo = async (req, res) => {
    const id = req.params.videoId;
  
    try {
      const getVideo = await Video.findById(id);
      return res.status(200).json(getVideo);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  const updateVideo = async (req, res) => {
    const id = req.params.videoId;
  
    try {
      const updatedVideo = await Video.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json(updatedVideo);
    } catch (err) {
      return res.status(500).json(err);
    }
  };


  //delete video

const deleteVideo = async (req, res) => {
    const id = req.params.videoId;
  
    try {
      await Video.findOneAndDelete(id);
      return res.status(200).json('deleteVideo');
    } catch (err) {
      return res.status(500).json(err);
    }
  };


  module.exports.createVideo = createVideo;
  module.exports.updateVideo = updateVideo;
  module.exports.getVideos = getVideos;
  module.exports.getVideo = getVideo;
  module.exports.deleteVideo = deleteVideo;
// module.exports.filterVideo = filterVideo;
  