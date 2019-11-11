module.exports = function () {
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim(); //remove the new line
        if(cmd === 'pwd') {
          process.stdout.write('current directory: ' + process.cwd());
        }
    })

process.stdout.write('You typed: ' + cmd);
process.stdout.write('\nprompt > ');
}