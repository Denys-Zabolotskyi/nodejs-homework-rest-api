const multer = require("multer");
const path = require("path");

const tempDir = path.join(__dirname, "../", "temp");

const malterConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: malterConfig,
});

module.exports = upload;
