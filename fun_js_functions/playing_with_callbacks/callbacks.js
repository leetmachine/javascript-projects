//each step is an equate callback. 
//step 1: execute is a function that takes a callback (another function to be executed). 
//In this case runMe is the callback.
function runMe(){
    console.log('runMe as declared callback function...step 1');
}

function execute(callback){
    callback();
}

execute(runMe);


//step 2: converting runMe into an anonymous, inline function is easy
//just removes its variable name and place it where callback was.

execute(function(){
    console.log('runMe as an anonymous function...step 2');
});

//step 3: change the anonymous function to a fat arrow function
//AirBnb style: use fat arrows in place on anonymous functions. It creates a version of the anonymous function that executes in the context of 'this', which is usually what you want.
execute(() => {
    console.log('runMe as a fat arrow...step 3');
});