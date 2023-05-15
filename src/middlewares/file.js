const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const storageImage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "cuarto_de_croquetas",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const uploadImage = multer({ storage: storageImage });

module.exports =  uploadImage