
// Below it for the button click and making the last LI blue
const highlightLast = document.querySelector("section")
    .firstElementChild
    .lastElementChild
    .children[3]

document.getElementById("highlight").addEventListener("click", function (){
   highlightLast.style.color = "blue";
 });

 const h3s = document.querySelectorAll("h3");
 for (let h3 of h3s) {
    h3.addEventListener("click", () => {
        const ul = h3.querySelectorAll("li");
        for(let li of lis) {
            li.style.fontWeight = "bold";
        }

    })
 }

<!--When any h3 is clicked, the list underneath it should have a fontWeight of "bold". Hint: you -->
<!--should use this in the event listener to access the next sibling of the h3 that is clicked. -->



