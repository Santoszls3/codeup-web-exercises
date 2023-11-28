
// Below When any list item is clicked, the first li of that list item's parent ul should have a -->
// <!--font color of blue. Hint: you should again rely on this in the li event handler.-->
const highlightLast = document.querySelector("section")
    .firstElementChild
    .lastElementChild
    .children[3]
document.getElementById("highlight").addEventListener("click", function (){
   highlightLast.style.color = "blue";
 });


<!--When any h3 is clicked, the list underneath it should have a fontWeight of "bold". Hint: you -->
<!--should use this in the event listener to access the next sibling of the h3 that is clicked. -->
 const h3s = document.querySelectorAll("h3");
 for (let h3 of h3s) {
    h3.addEventListener("click", () => {
        const ul = h3.querySelectorAll("li");
        for(let li of lis) {
            li.style.fontWeight = "bold";
        }

    })
 }


// 3. Create a button that, when clicked, makes the last li in each ul have a yellow background.
document.querySelector('#btn-last-items-yellow').addEventListener('click', () => {
    const uls= document.querySelectorAll('ul');
    for (const ul of uls) {
        ul.lastElementChild.style.backgroundColor = 'yellow';
    }
});


