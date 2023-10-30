"use strict";

const person = {firstName: 'Mick', lastName: 'Mack'}
const kitchenSink ={
    favNum: 13,
    favColors: ['blue', 'turquoise'],
    isFunny: true
}


// in index.js, you'll find a restaurant object that contains a name, address, city, state, and zipcode.
// 1 Your task to is to create a variable named fullAddress that points to a string using the information
// from restaurant.

// fullAddress should point to a string that includes the address, city, state,
// and zipcode from the restaurant object. Make sure to add any necessary commas or spaces between
// the values as seen in the exact expected output format shown below.
// To make it harder to "cheat" by copy and pasting, I've randomly generated the address portion.
// string (keep an eye on the commas and/or spaces between the values and match that too!)

//PLEASE DON'T TOUCH THIS LINE!

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
console.log(restaurant.address);
console.log(restaurant.city);
console.log(restaurant.state);
console.log(restaurant.zipcode);

//create a variable named fullAddress that points to a string using the information
// from restaurant.

const fullAddress =
    restaurant["address"] + ", " +
    restaurant["city"] + ", " +
    restaurant["state"] +" " +
    restaurant["zipcode"];

const fullAddressTwo = `${restaurant["address"]}, ${restaurant["city"]}, ${restaurant["state"]} ${restaurant["zipcode"]}`;

const fullAddressThree = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

const fullAddressFour = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;

// 'For example, if address was "64 Johnson Ave", the fullAddress variable would look like this:
//
// **********               "64 Johnson Ave, Brooklyn, NY 11206"
// this is the expected output format of the fullAddress string
// (keep an eye on the commas and/or spaces between the values and match that too!)

// const comments = [
//     {username: 'Tammy', text: 'LOL,LOL', votes: 87},
//     {username: 'FishBoi', text: 'glub glub', votes: 2000},
// ]




//                              **********************************



(function() {

    // We can create an object with properties like so!
    const kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: new Date("12/6/2013")
    };

    // We can also define property values to an object these two ways!
    kamea.age = 9;
    kamea["weight_in_lbs"] = 2400;

    const babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: new Date("2/6/2021")
    };

    // We can access the properties but using the following syntax.
    console.log(kamea.age);

    console.log(babyBeluga.name + " in " + babyBeluga.location + ", he swim so wild, and he swim so free...");

    console.log(babyBeluga);

    // Well, whales are neat and all, but what would be a more practical application for objects?

    const forecast = [
        {
            day: "Monday",
            summary: "Partly cloudy.",
            highsLows: {
                highActual: 92,
                highFeels: 96,
                lowActual: 72,
                lowFeels: 74
            },
            icon: "../img/part_cloud.jpg", // This will make more sense when we start talking about manipulating the page using JS.
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Tuesday",
            summary: "Sunny.",
            highsLows: {
                highActual: 99,
                highFeels: 99,
                lowActual: 76,
                lowFeels: 76
            },
            icon: "../img/sunny.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }, {
            day: "Wednesday",
            summary: "Rainy.",
            highsLows: {
                highActual: 88,
                highFeels: 92,
                lowActual: 68,
                lowFeels: 66
            },
            icon: "../img/rain.jpg",
            location: {
                lat: 30.2672,
                long: -97.7431,
                city: "Austin",
                state: "TX",
                country: "USA"
            }
        }
    ];

    // Above is an array of weather forecasts, here we can see nested objects
    // within the different objects in the array.

    forecast.forEach(function(prediction) {
        console.log(prediction.day);
        console.log(prediction.location.city);
    });

    // While we store the different forecasts in an array to hold the
    // information for the three different days, each object has different
    // information in order to store the information for a daily weather forecast.

    // Let's take a look at another object...

    const user = {
        username: "JimLikesEggs",
        password: "this-is-am-good-password",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("2/17/1967")
    };

    const user2 = {
        username: "BigDave",
        d_o_b: new Date("11/20/1991")
    };

    // with this user object, let's add a method:

    function calculateAge() {
        const today = new Date();
        if (this.d_o_b.getMonth() <= today.getMonth()){
            if (this.d_o_b.getDate() <= today.getDate()) {
                this.age = today.getFullYear() - this.d_o_b.getFullYear();
            } else {
                this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
            }
        } else {
            this.age = today.getFullYear() - this.d_o_b.getFullYear() - 1;
        }
        return this.age;
    }

    user.calcAge = calculateAge;
    user2.calcAge = calculateAge;

    console.log(user.calcAge());
    console.log(user2.calcAge());

    // Notice with the method we used the "this" keyword. This allows us to have
    // an object to reference itself when creating a method. It will not work when
    // trying to define a property.

    // user.name = this.username; // This will give an error.
    //
    // console.log(user.name);

    let firstName = "David";
    let surname = "Stephens";
    const instructor = {
        givenName: firstName,
        surname
    };

    let { d_o_b, violinStatus } = user;

    console.log(d_o_b);
    d_o_b = new Date("12/25/1998");
    console.log(d_o_b);
    console.log(user.d_o_b);
    console.log(violinStatus);

})();

// Object = A group of properties and methods
//          Properties = What an object has
//          Methods = What an object can do
//          use a . to access properties/methods

const carOne = {
    model:"Lexus",
    color:"turquoise",
    year: 2023,

    drive : function (){
        console.log("You drive the car ");
    },
    break: function (){
        console.log("You step on the breaks")
    }
}
const carTwo = {
    model:"Toyota",
    color:"black",
    year: 2023,

    drive : function (){
        console.log("You drive the car ");
    },
    break: function (){
        console.log("You step on the breaks")
    }
}

const car3 = {
    model:"Corvette",
    color:"black",
    year: 2021,

    drive : function (){
// The **THIS** keyword, reference to a particular object
// the object depends on the immediate context
        console.log(`You drive the ${this.model} `);
    }
}

// console.log(carTwo.model);
// console.log(carTwo.color);
// console.log(carTwo.year);
// This gives me access to the objects specific property

carTwo.drive();
carTwo.drive();
car3.drive();
//If I wanted access to the objects Method this is how you do it, the parentheses invoke it


















// (() =>
// {
//  Date object
// this changes a new date object for right now
//
//
//     let rightNow = new Date();
//     console.log(rightNow)
//
//     let christmas1998 = new Date("12/25/1998");
//     console.log(christmas1998)
// })();

// ****** function
//