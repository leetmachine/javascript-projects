const fs = require('fs');

function getCars (filepath, done) {
    fs.readFile(filepath, function (err, cars) {
        if (err) return done(err)

        fs.readFile('sportscars.dictionary', function(err, dict) {
            if(err) return done(err)

            compareInput(cars, dict)
        })
    })

    function compareInput(cars, dict){
        dict = dict.toString().split('\n')
        cars = cars.toString().split('\n').filter(function(car){
            return dict.indexOf(car) !== -1
        })
        done(null, cars)
    }
}

getCars('input.txt', function(err, cars){
    console.log(cars)
})

