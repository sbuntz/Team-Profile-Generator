//reset the html file from the dist folder
//uses `npm run reset` script

const fs = require('fs');
if(fs.existsSync('./dist/team.html)')) {
    fs.unlinkSync('./dist/team.html');
    console.log('/dist/ folder reset')
}