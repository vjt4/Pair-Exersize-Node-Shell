module.exports = function (cmd){
  if(cmd === 'pwd') {process.stdout.write('current directory: ' + process.cwd());
  }
}
