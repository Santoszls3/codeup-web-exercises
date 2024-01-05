"use strict"

fetch("http://localhost:3000/books").then(resp => resp.json()).then(data => console.log(data));
fetch("http://localhost:3000/books/4").then(resp => resp.json()).then(data => fetch("http://localhost:3000/books/authors/" +
    data.authorId)).then(resp => resp.json()).then(data => console.log(data));

const creatBook =  async (book) => {
    try {
        const url = 'http://localhost:3000/books';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(book)
        };
        const resp = await fetch(url, options);
        const newBook = await resp.json();
        return newBook
    } catch (error){
        console.log(error);
    }
}


const editBook = async (book) => {
    try {
        const url = `http://localhost:3000/books/${id}`;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(book)
        };
        const resp = await fetch(url, options);
        const newBook = await resp.json();
        return newBook
    } catch (error){
        console.log(error);
    }
}



const creatAuthor =  async (author) => {
    try {
        const url = 'http://localhost:3000/author';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(book)
        };
        const resp = await fetch(url, options);
        const newBook = await resp.json();
        return newBook
    } catch (error){
        console.log(error);
    }
}


const newBook ={
    "title": "Garfield at Large",
    "authorId": 4,
    "publishedYear": 1980,
    "genre": "Daily Comics",
    "summary": "The epic tail of a ft cat, and his cartoonist owner Jon.",
    "ISBN": "9780345320131"
}
creatBook(newBook).then(() => fetch('http://localhost:3000/books')).then
(resp => resp.json()).then(data => console.log(data));

const jimDavis ={
    "name": "Jim Davis ",
    "birthYear": 1945,
    "deathYear": null,
    "nationality": "American",
}

editBook({"authorId": 5})


