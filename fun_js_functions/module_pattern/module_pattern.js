/*step 1: in the browser this function foo() is accessible in the global namespace.
this is a problem because it is cluttering the global namespace and variables may overlap from other sources.

function foo() {
    console.log('foobar');
}

foo();
*/

/*step 2a: to slove this, you can wrap your function in a self-executing anonymous function
//this function is evaluated immediatlely, and the foo() function is called.
//NodeJS does something similar to your code inside its source.
//this function foo() is not available in the global namespace.
(function() {
    function foo() {
        console.log('foobar');
    }

    foo();
}());
*/

/*step 2b: you can also remove the closures by adding a '!'. this is equivalent to step 2a, but is beneficial if you are concatenating files together.
!function() {
    function foo() {
        console.log('foobar');
    }

    foo();
}();
*/

//step 3: Module Export Pattern
//create a module that exports 2 variables and 2 functions. These are now available on the namespace as awesomeModule.helloMars, but not helloMars (reducing clutter).
/*const awesomeModule = (function() {
    const exports = {
        foo: 5,
        bar: 10
    };
    exports.helloMars = function() {
        console.log('hi mars!');
    };
    exports.goodbye = function() {
        console.log('goodbye!');
    }

    return exports
}());
*/
//step 4: Loose Augmentation Pattern
var awesomeModule = (function(exports) {
    var exports = {
        foo: 5,
        bar: 10
    };
    exports.helloMars = function() {
        console.log('hi mars!');
    };
    exports.goodbye = function() {
        console.log('goodbye!');
    }

    return exports

}(awesomeModule || {}));
