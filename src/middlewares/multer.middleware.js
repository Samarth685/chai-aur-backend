import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const tempPath = path.resolve("public", "temp"); 
    cb(null, tempPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({storage,});

export {upload};