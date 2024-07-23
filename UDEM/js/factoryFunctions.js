// //This functions makes and returns an object every time it is called.
// // The resulting objects all follow the same "recipe"
//
//
//
// function makeColor(r, g, b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const { r, g, b } = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     };
//     return color;
// }
//
// const firstColor = makeColor(35, 255, 150);
// firstColor.hex(); //firstColor.hex();
// firstColor.rgb(); //"rgb(35, 255, 150)"
//
// const black = makeColor(0, 0, 0);
// black.rgb(); //"rgb(0, 0, 0)"
// black.hex(); //"#0000s00"
// //***************************************************************
// //***************************************************************
//
//
//
//
// // This is a Constructor Function...
// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
//
// //If you call it on its own like a regular function...
// Color(35, 60, 190); //undefined
// //It returns undefined. Seems useless!
//
// // *****************
// // THE NEW OPERATOR!
// // *****************
//
// // 1. Creates a blank, plain JavaScript object;
// // 2. Links (sets the constructor of) this object to another object;
// // 3. Passes the newly created object from Step 1 as the this context;
// // 4. Returns this if the function doesn't return its own object.
//
// Color.prototype.rgb = function() {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`;
// };
//
// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
//
// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
//
// const color1 = new Color(40, 255, 60);
// color1.hex();
// const color2 = new Color(0, 0, 0);
// color2.hex();


// Define a class named 'Color'
//*****************************************************

class Color {
    // Constructor method to initialize color properties
    constructor(r, g, b, name) {
        this.r = r;     // Red color component (0-255)
        this.g = g;     // Green color component (0-255)
        this.b = b;     // Blue color component (0-255)
        this.name = name; // Name of the color
        this.calcHSL();
    }

    // Method to return the RGB values as a string in the format '(r, g, b)'
    innerRGB() {
        // Destructure the r, g, b properties from the instance
        const { r, g, b } = this;
        // Return the RGB values as a string
        return `(${r}, ${g}, ${b})`;
    }

    // Method to return the RGB color as a string in the format 'rgb(r, g, b)'
    rgb() {
        // Call the innerRGB method and format it as an RGB string
        return `rgb(${this.innerRGB()})`;
    }

    // Method to return the RGBA color as a string in the format 'rgba(r, g, b, a)'
    rgba(a = 1.0) {
        // Call the innerRGB method and include the alpha value
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    // Method to return the HEX representation of the color
    hex() {
        // Destructure the r, g, b properties from the instance
        const { r, g, b } = this;
        // Convert the RGB values to a hexadecimal string
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    }


    //*************** hsl
    // Method to return the HSL color as a string in the format 'hsl(h, s%, l%)'
    hsl() {
        const { h, s, l } = this;
        return `hsl(${h},${s}%, ${l}%)`;
    }

    // Method to return the fully saturated version of the color
    fulllySaturated() {
        const { h, l } = this;
        return `hsl(${h},100%, ${l}%)`;
    }

    // Method to return the opposite (complementary) color
    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360; // Calculate the opposite hue
        return `hsl(${newHue},${s}%, ${l}%)`;
    }

    // Method to calculate HSL values from RGB
    calcHSL() {
        let { r, g, b } = this;

        // Normalize r, g, and b values to fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find the minimum and maximum values among r, g, b
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin, // Difference between cmax and cmin
            h = 0, s = 0, l = 0;

        // Calculate hue
        if (delta == 0) {
            h = 0; // If no difference, hue is 0
        } else if (cmax == r) {
            // Red is the dominant color
            h = ((g - b) / delta) % 6;
        } else if (cmax == g) {
            // Green is the dominant color
            h = (b - r) / delta + 2;
        } else {
            // Blue is the dominant color
            h = (r - g) / delta + 4;
        }

        h = Math.round(h * 60); // Convert hue to degrees

        if (h < 0) h += 360; // Ensure hue is positive

        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Convert saturation and lightness to percentages
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        // Assign calculated values to the instance
        this.h = h;
        this.s = s;
        this.l = l;
    }

}

// Create new instances of the Color class
const red = new Color(255, 67, 89, 'tomato');
red.hsl();
red.opposite();
red.rgba(0.3);
const white = new Color(255, 255, 255, 'white');
// Example usage:
// red.rgb() -> "rgb(255, 67, 89)"
// red.rgba(0.5) -> "rgba(255, 67, 89, 0.5)"
// red.hex() -> "#ff4359"
// white.rgb() -> "rgb(255, 255, 255)"
// white.hex() -> "#ffffff"

// Explanation:
//     Class Definition and Constructor:
//
//     The Color class is defined with a constructor that initializes four properties: r, g, b (representing the red, green, and blue color components respectively), and name (the name of the color).
// innerRGB Method:
//
//     This method returns the RGB values of the color instance in a string format (r, g, b). It destructures the r, g, and b properties from the instance to format the string.
//     rgb Method:
//
//     This method returns the color in the standard CSS rgb format rgb(r, g, b) by calling the innerRGB method.
//     rgba Method:
//
//     This method returns the color in the CSS rgba format rgba(r, g, b, a), where a is the alpha (opacity) value. It defaults to 1.0 (fully opaque) if no value is provided. It also calls the innerRGB method and appends the alpha value.
//     hex Method:
//
//     This method converts the RGB color components to a hexadecimal string #rrggbb. It uses bitwise operations to create the hexadecimal value and then formats it as a string.
//     Creating Instances:
//
//     Instances of the Color class are created for red (a tomato red color) and white.
//     Usage:
// The created instances can be used to get the RGB, RGBA, and HEX representations of the colors.
//     Example methods rgb(), rgba(), and hex() provide different string formats useful for CSS and web development.

//*********************************
//Using a class-based approach, as in your first example, provides several benefits over the traditional
// object creation methods and constructor functions. Here are the key advantages:
//
// 1. Cleaner and More Readable Code
// Class Syntax: The class syntax is more concise and easier to read compared to defining functions on the
// prototype. It clearly shows the methods that belong to the class.
// Encapsulation: Methods are encapsulated within the class definition, making the structure of the code
// cleaner and more organized.
// 2. Ease of Use
// Instantiation: Creating instances of a class is straightforward with the new keyword, and all methods are
// automatically available on the instances.
// Inheritance: Classes provide a simpler and more intuitive syntax for inheritance and extending functionality.
// 3. Standardization
// ES6 Standards: Using classes aligns with ES6 standards and modern JavaScript practices, which is important for
// maintaining consistency and compatibility with new features and libraries.
// 4. Prototype Chain
// Efficiency: Methods defined in a class are stored in the prototype of the objects, meaning they are shared
// among all instances, which saves memory compared to defining methods inside a function (each instance would
// have its own copy of the method).

//**********************

class Pet {
    constructor(nam, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends Pet{
    constructor(name, age, livesLeft = 9) {
        console.log('In Cat Constructor')
        super(name, age);
        this.livesLeft = livesLeft
    }
    meow(){
        return 'Meowwww!'
    }
}

class dog extends Pet{

    bark(){
        return 'WOOFF!!';
    }
    eat() {
        return `${this.name} scarfs his food!`;
    }
}

// Tweet Sections
var tweet = prompt('Write your Tweet:');
var tweetCount = tweet.length;

alert("You have written" + tweetCount + " characters, you have " + (140 - tweetCount) + " characters remaining. ")