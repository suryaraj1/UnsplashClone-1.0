const express = require("express");
const router = express.Router();

const photosMap = {};

router.get("/test", (req, res) => {
  res.send("test route");
});

router.get("/", (req, res) => {
  const photos = [];
  if (Object.keys(photosMap).length > 0) {
    Object.keys(photosMap).forEach(label => {
      const { photoLabel, photoUrl } = photosMap[label];
      const photo = {
        photoLabel,
        photoUrl,
      };
      photos.push(photo);
    });
    res.status(200).send(photos);
  } else {
    res.status(400).send({
      message: "No photo has been added yet",
    });
  }
});

router.post("/", (req, res) => {
  const { label, url } = req.body;
  photosMap[label] = {
    photoLabel: label,
    photoUrl: url,
  };
  res.status(201).send({
    message: "Photo added!",
  });
});

router.delete("/:photoLabel", (req, res) => {
  const { photoLabel } = req.params;
  if (photosMap[photoLabel]) {
    delete photosMap[photoLabel];
    res.status(204).json({
      message: "Photo has been deleted!",
    });
  } else {
    res.status(404).send({
      message: "Photo does not exist!",
    });
  }
});

module.exports = router;
