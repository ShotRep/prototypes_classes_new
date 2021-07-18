/* We will be focusing on JS version of Object Oriented Programming or OOP.
1.) Object Prototypes
2.) Constructor Functions
3.) Classes
4.) Super Key Word
5.) Inheritance
*/

//Object Prototypes
/*
What is a Prototype? _proto_ Its the template object for whatever Object we are using say an array.  It contains a bunch of methods, but we can also add to theses methods with our own.
These examples are not recommended IRL code just examples of how they work.

Boiling it down: A single OBJECT that contains common properties and methods that other copies other objects of Strings or Arrays, look up to in order to find their common properties.  A place to store things a template or blueprint however you want to put it.

Confusion regarding .prototype and _proto_ : They both are very similar but .prototype is the actual prototype object and _proto_ is the reference, simply a property name on the object.
*/
//create are own string method for the String Prototype
// String.prototype
// String.prototype.grumpus = () => alert('Go Away')
// const cat = 'Blue'
// // cat.grumpus()

// //Another example
// String.prototype.yell = function () {
//   console.log(this.toLocaleUpperCase())
// }
// console.log("hello".yell())

// //with an array - replacing the existing pop method with our own.
// Array.prototype.pop = function () {
//   return 'Sorry I want that element, I will never pop it off!'
// }

// console.log([3, 4, 5].pop())
// we have replaced .pop with a disgruntled method and now we just get backtalk. 

/*                   Constructor Functions - an intro into OOP       */

//Factory functions and why its not so great.  We will see the preferred method next.
// function hex(r, g, b) {
//   return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
// }
// console.log(hex(255, 100, 25))

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`
// }
// console.log(rgb(255, 100, 25))

// function makeColor(r, g, b) {
//   const color = {}
//     color.r = r
//     color.g = g
//   color.b = b
//   color.rgb = function () {
//     const {r,g,b}=this
//     return `rgb(${r}, ${g}, ${b})`
//   }
//   color.hex = function () {
//     const{r,g,b} =this
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   }
//     return color
//   }
// const firstColor = makeColor(35, 255, 150)
// console.log(firstColor)
// console.log(firstColor.hex())

/*                  CONSTRUCTOR FUNCTIONS   &  the NEW operator        */
//creates a blank JS object
//links(sets constructor of) THIS Object to another Object
//passes the newly created object from step1 as the THIS context
//returns THIS if the function doesn't return its own object
function Color(r, g, b) {
  this.r = r
  this.g = g
  this.b = b
  console.log(this) //refers to the global object or window.
}

Color.prototype.rgb = function () {
  const { r, g, b } = this
  return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function () {
  const { r, g, b } = this
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

let color1 = new Color(255, 125, 0)
console.log(color1.rgb())
console.log(color1.hex())

let color2 = new Color(10, 100, 225)
console.log(color2.rgb())
console.log(color2.hex())

console.log(color1.hex === color2.hex) // true  -  shows us there is 1 copy of the methods, they are pointing to the same thing the _proto_.

/*                 Classes      Syntactical Sugar for constructor functions           */

//Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

//Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

//One way to define a class is using a class declaration. To declare a class, you use the class keyword with the name of the class

//An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise your code will throw a ReferenceError:



