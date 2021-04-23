const pwdFunc = require("./pwd");
const lsFunc = require("./ls");

process.stdout.write("prompt > ");
const userInput = process.stdin.on("data", (data) => {
  if (data === "pwd") {
    pwdFunc();
  }
}); //  pwdFunc();

// const cmd = data.toString().trim();

// process.stdout.write('You typed: ' + cmd);
//process.stdout.write(process.cwd());

//process.stdout.write("\nprompt > ");

//pwdFunc();
//lsFunc();
