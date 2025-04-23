// apps/strapi-api/src/index.js
const fs = require("fs");
const path = require("path");

module.exports = {
  register() {},

  bootstrap() {
    const uploadPath = path.join(__dirname, "../public/uploads");

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log("✅ Uploads folder created at runtime");
    } else {
      console.log("✅ Uploads folder already exists");
    }
  },
};
