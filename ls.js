let fs = require("fs");

module.exports = function () {
  fs.readdir("./", "utf8", (err, files) => {       //unclear about WHY those arguments for readdir
    if (err) {
      throw err;
    } else {
      process.stdout.write(files.join("\n"));
      process.stdout.write("\nprompt > ");
    }
  });
};