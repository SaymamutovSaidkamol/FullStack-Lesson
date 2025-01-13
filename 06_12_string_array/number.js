let num = 12345.6789;

// Basic Number Methods
let toFixed = num.toFixed(2); // Format to 2 decimal places
let toExponential = num.toExponential(3); // Convert to exponential notation
let toPrecision = num.toPrecision(5); // Format with 5 significant digits
let toString = num.toString(); // Convert to string
let valueOf = num.valueOf(); // Get the primitive value of the number

// Number Constants
let maxVal = Number.MAX_VALUE; // Maximum representable value
let minVal = Number.MIN_VALUE; // Minimum representable value
let infinity = Number.POSITIVE_INFINITY; // Positive infinity
let negInfinity = Number.NEGATIVE_INFINITY; // Negative infinity
let nan = Number.NaN; // Not-a-Number value

// Checking Methods
let isFiniteNum = Number.isFinite(num); // Check if the number is finite
let isInteger = Number.isInteger(num); // Check if it's an integer
let isNaNCheck = Number.isNaN("not a number"); // Check if it's NaN
let isSafeInteger = Number.isSafeInteger(9007199254740991); // Check if it's a safe integer

// Conversion Methods
let parsedInt = Number.parseInt("123px"); // Parse integer from a string
let parsedFloat = Number.parseFloat("123.45px"); // Parse float from a string

// Math Methods
let absVal = Math.abs(-123); // Absolute value

let ceilVal = Math.ceil(4.2); // Round up
let floorVal = Math.floor(4.8); // Round down
let roundVal = Math.round(4.5); // Round to nearest integer
let truncVal = Math.trunc(4.9); // Remove the fractional part

let sqrtVal = Math.sqrt(16); // Square root
let cbrtVal = Math.cbrt(27); // Cube root
let powVal = Math.pow(2, 3); // Exponentiation (2^3)
let maxValArr = Math.max(1, 2, 3, 4, 5); // Maximum value in a set
let minValArr = Math.min(1, 2, 3, 4, 5); // Minimum value in a set
let randomVal = Math.random(); // Random number between 0 and 1
let logVal = Math.log(10); // Natural logarithm of 10
let expVal = Math.exp(1); // Exponential (e^1)
let sinVal = Math.sin(Math.PI / 2); // Sine of PI/2
let cosVal = Math.cos(0); // Cosine of 0
let tanVal = Math.tan(Math.PI / 4); // Tangent of PI/4
