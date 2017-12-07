const fs = require('fs');

const cars = ['cayman', '911', 'gt-r', 'civic', 'z4', 'aventador', 'shelby', 'accord', 'f12berlin', 'sentra'];

for(let i =0; i < 100; i++){
    let rand = parseInt(Math.random() * 10);
    fs.appendFile('input.txt', cars[rand] + '\n', (err) => {
        if(err) throw err;
    });
}