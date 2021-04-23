//const pwdCmd = () => {
///= process.stdin.on("pwd", () => {
//const cmd = data.toString().trim();

//   process.stdout.write(process.cwd());
//   process.stdout.write("\nprompt > ");
// };

module.exports = () => {
  process.stdout.write(process.cwd());
  process.stdout.write("\nprompt > ");
};
