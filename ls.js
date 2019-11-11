module.exports = function (cmd){
  if(cmd === 'ls') {
    const fs = require('fs');
    fs.readdir('./', 'utf8', (err,files) =>{
      if (err) {
        throw err
      } else {
        process.stdout.write(files.join('\n'))
      }
    })
  }
}

