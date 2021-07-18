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
String.prototype
String.prototype.grumpus = () => alert('Go Away')
const cat = 'Blue'
// cat.grumpus()

//Another example
String.prototype.yell = function () {
  console.log(this.toLocaleUpperCase())
}
console.log("hello".yell())

//with an array - replacing the existing pop method with our own.
Array.prototype.pop = function () {
  return 'Sorry I want that element, I will never pop it off!'
}

console.log([3, 4, 5].pop())
// we have replaced .pop with a disgruntled method and now we just get backtalk. 

/*                   Constructor Functions - an intro into OOP       */

//Factory functions and why its not so great.  We will see the preferred method next.
function hex(r, g, b) {
  return '#' + ((1<<24)+(r<<16)+(g<<8)+b).toString(16).slice(1)
}
console.log(hex(255, 100, 25))

function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`
}
console.log(rgb(255, 100, 25))

function makeColor(r, g, b) {
  const color = {}
    color.r = r
    color.g = g
  color.b = b
  color.rgb = function () {
    const {r,g,b}=this
    return `rgb(${r}, ${g}, ${b})`
  }
  color.hex = function () {
    const{r,g,b} =this
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }
    return color
  }
const firstColor = makeColor(35, 255, 150)
console.log(firstColor)
console.log(firstColor.hex())

/*                  CONSTRUCTOR FUNCTIONS               */

