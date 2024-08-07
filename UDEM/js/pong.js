

const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;
p1Button.addEventListener('click', function (){
    if(!isGameOver && p1Score < winningScore){
        p1Score += 1;
        p1Display.textContent = p1Score;
    if (p1Score === winningScore){
        isGameOver = true;
        p1Display.classList.add('winner');
        p2Display.classList.add('loser');
    }

    }
});

p2Button.addEventListener('click', function (){
    if(!isGameOver && p2Score < winningScore){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if (p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('loser');
        }

    }
});

winningScoreSelect.addEventListener('change', function (){
   winningScore = parseInt(this.value);
});

resetButton.addEventListener('click', reset );

function reset(){
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser');

}


//************************************
const delayedColorChanges = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}
async function rainbow() {
    await delayedColorChanges('red', 5000)
    await delayedColorChanges('orange', 5000)
    await delayedColorChanges('yellow', 5000)
    await delayedColorChanges('green', 5000)
    await delayedColorChanges('blue', 5000)
    await delayedColorChanges('indigo', 5000)
    await delayedColorChanges('violet', 5000)
}
rainbow().then(() => console.log("END OF THE RAINBOW"))
