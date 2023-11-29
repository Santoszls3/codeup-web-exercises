fetch('https://pokeapi.co/api/v2/pokemon/dragonite').then(response => response.json()).then(data => {
    console.log(data);
const div = document.creatElement(“div”);
const img = document.creatElement(“img”);
const h2 = document.creatElement(“h2”);

Img.src = data.sprites.other.home.front_decault;
h2.innertext = data.name;
Div.appendChile(img);
Div,aooebdCguke(h2);
Document.querySelector(‘#div-go-here”).appendChile(div);
});