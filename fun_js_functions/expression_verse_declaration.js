//Function Expressions vs. Function Declarations.
/*airBnb style guide suggests using named function expressions instead of function declarations
    -FD's are easy to reference in the file before they are defined which makes code harder to read and maintain.
    -If a function is so large that as an expression it is interfering with the rest of the file you should consider making it a module.
    -
*/
let name = 'Keegan';


/*Function Expressions
-Only created when the execution reaches it, only then is it usable.
-Not hoisted. 
*/

/*
If we try to call expressionGreeting(name) at this line we get:
ReferenceError: expressionGreeting is not defined. Use must be afer its declaration.
*/

const expressionGreeting = function(name){
    console.log('Hello, ' + name + ' (expressionGreeting)');
};

expressionGreeting(name);

//airBnb style guide says to name the function expression so the Error's call stack can be easily traced.

const greeting = function longUniqueMoreDescriptiveLexicalGreeting(name) {
    cnsole.log('Hello, ' + name + ' (greeting w/ style');
};


/*Immediately Invoked Function Expression
-characterized by not being named and wrapping the whole function in parens.
-called immediately where it is defined. 
-Used to create a new variable scope and not pollute the global namespace.
    -note how name can be declared again within the scope.
 */
(function(){
    let name = 'Aukai';
    console.log('Hi ' + name + ' (IIFE)');
})();

//the parens can be replaced with + or !, https://stackoverflow.com/questions/3755606/what-does-the-exclamation-mark-do-before-the-function
//important for files that would be concatenated together.
//! allows us to return true for a function with no return statement (would be undefined, opposite is true).
//+ allows 
!function(){
    let name = 'Mom';
    console.log('Plus '+ name + ' (+IIFE)')
}();


/**************************************/
/*Function Declarations
-Can be called before and after it was defined.
-It is hoisted.
*/

name = 'Leia';
DeclaredGreeting(name);

function DeclaredGreeting(name){
    console.log('Hey there ' + name + ' (DeclaredGreeting)');
}

name = 'Angelique';
DeclaredGreeting(name);
