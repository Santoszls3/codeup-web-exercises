// setTimeout(function () {
//     var profilePic = document.getElementById("profile-pic");
//     if (profilePic) {
//         profilePic.src = "IMG/Cow.jpg";
//     }
// }, 2000);

setTimeout(() => document.querySelector("#profile-pic").src = "IMG/Cow.jpg",
    2000);


// Four seconds after the page loads, use innerHTML to change the name in "profile-name".
// setTimeout(function () {
//     var profileName = document.getElementById("profile-name");
//     if (profileName) {
//         profileName.innerHTML = "Mr Gonzales"
//     }
// }, 4000);

setTimeout(() => document.querySelector("#profile-name").innerText = "Mr. Cowen",
    4000);



// Six seconds after page loads, add a new class to "profile-desc" that changes the
// color and font of the description text.
// setTimeout(function () {
//     var profileDesc = document.getElementById("profile-desc");
//     if (profileDesc) {
//         profileDesc.style.color = "blue";   // Change color to blue
//         profileDesc.style.fontFamily = "Dancing Script";  // Change font family
//     }
// }, 6000);
setTimeout(() => document.querySelector("#profile-desc").classList.add("blue1"), 6000);

//     Use setTimout to create these behaviors.


//     Write code that toggles a class on the "profile-card" that changes its background color every two seconds. Use setInterval.
//

// setInterval(function () {
//     var profileCard = document.getElementById("profile-card");
//     if (profileCard) {
//         var currentColor = profileCard.style.backgroundColor;
//         profileCard.style.backgroundColor = currentColor === "red" ? "pink" : "red" // Toggle between red and pink
//     }
// }, 2000);

setInterval(() => {document.querySelector("#profile-card").classList.toggle("funky")}, 2000)