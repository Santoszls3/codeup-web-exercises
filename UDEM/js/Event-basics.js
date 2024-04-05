const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    // you usually dont want to modify color properties in dom just doing it for simplicity.
    // the code below will give us a random rgb value to change the background color of the page
    const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor
})


const buttons2 = document.querySelectorAll('#button2 button'); // Select all buttons within the #button2 div

for(let button of buttons2){
    button.addEventListener('click', function () {
        // below will change the color of the button
        button.style.backgroundColor = makeRandomColor();
        // below will change the color of the font in the button
        button.style.color = makeRandomColor();
    });
}

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}


document.querySelector('button').addEventListener('click', function (evt){
    alert("click")
})