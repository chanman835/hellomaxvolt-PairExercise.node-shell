//Output a prompt
// process.stdout.write("prompt > ");

// // the stdin 'data' event fires after a user types in a line
// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();   //remove the newline

//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write("\nprompt > ");
// });

//ABOVE is how this was given to us

//BELOW is our work

//Output a prompt
let objectFromPwd = require("./pwd.js");
let ls = require("./ls.js");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if (cmd === "pwd") {
    //previously we did not invoke .pwd and the terminal did not respond. NEED TO INVOKE .pwd() even if the funciton itself it returning a solution
    objectFromPwd.pwd();
    process.stdout.write("\nprompt > ");
  }

  if (cmd === "ls") {
    ls();
  }
});
