let pwd = () => {
  process.stdout.write(process.cwd());
};

module.exports = {
  pwd,
};

//ABOVE is what we came up with, BELOW is their solution. Does it matter that ours isnt a function?

// module.exports = function () {
//     // pwd code
//   }</
//______________________________________
