const Photo = require("../models/photo")

const createPhoto = async (req, res) => {
    const newPhoto = new Photo({
        lenght: req.body.lenght,
        height: req.body.height,
    });
    try {
      const savedPhoto = await newPhoto.save();
      return res.status(201).json(savedPhoto);
    } catch (err) {
      return res.status(500).json(err);
    }
  };

  //get Photos
const getPhotos = async (req, res) => {
  try {
    const getPhotos = await Photo.find();
    return res.status(200).json(getPhotos);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//get Photo by id
const getPhoto = async (req, res) => {
  const id = req.params.photoId;

  try {
    const getPhoto = await Photo.findById(id);
    return res.status(200).json(getPhoto);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// update Photo
const updatePhoto = async (req, res) => {
  const id = req.params.photoId;

  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedPhoto);
  } catch (err) {
    return res.status(500).json(err);
  }
};

 //delete photo

 const deletePhoto = async (req, res) => {
  const id = req.params.photoId;

  try {
    await Photo.findOneAndDelete(id);
    return res.status(200).json('deletePhoto');
  } catch (err) {
    return res.status(500).json(err);
  }
};



  

  module.exports.createPhoto = createPhoto;
  module.exports.updatePhoto = updatePhoto;
  module.exports.getPhotos = getPhotos;
  module.exports.getPhoto = getPhoto;
  module.exports.deletePhoto = deletePhoto;