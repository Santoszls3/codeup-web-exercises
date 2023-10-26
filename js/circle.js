(function() {
    "use strict";

    // create a circle object
    const circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            return Math.PI * this.radius ** 2;

            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.


            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding) {
                 console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
                 } else {
                 console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
                }
            // can Also do:   console.log("Area of a circle with radius: " + this.radius + ", is: " + ((doRounding) ? Math.round(this.getArea()) : this.getArea()));
            // ternary operator/expression
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");


    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // The above is how you change the value of this property, this will change the value only it does not change
    // the fact that its a constant, this just redefines the value contained within an object declared within a constant
    // can add elements within an array that is declared as a constant, but you cannot change the fact that its a constant

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();