/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: when `this` is declared in the global scope, the value of `this` is 
      the `window` or `console` object.

* 2. Implicit binding: when `this` is declared in a method inside an object, `this` refers to
      the object that calls the method. Practically, this means `this` refers to the object 
      to the left of the dot.

* 3. `new` binding: when `this` is declared inside a constructor function (that is, a function
      that is called with the `new` keyword for the purpose of returning an object),
      `this` refers to the new object that was created using the constructor function.

* 4.  Explicit binding: whenever we call the built-in `.call` or `.apply` methods, we can explicitly
      set `this` to the first argument passed into the methods. This can override the implicit binding 
      of `this`.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const sayHi = function(name) {
  console.log(this); // prints out the global object
  return `Hi, ${name}!`;
} 

console.log(sayHi('Estelle'));


// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
