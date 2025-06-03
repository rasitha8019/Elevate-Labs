const express = require("express");
const app = express();

const PORT = 3000;
app.use(express.json());

//Home
app.get("/", (req, res) => {
  res.send("Welcome to Book Store!");
});

let books = [];
let nextId = 1;

//get books
app.get("/books", (req, res) => {
  res.status(200).json(books);
});

//adding book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.send("title and author are required");
  }
  const newBook = {
    id: nextId++,
    title,
    author,
  };

  books.push(newBook);
  res.send(books);
});

//update
app.put("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    res.send("book not found");
  }

  if (title) {
    book.title = title;
  }
  if (author) {
    book.author = author;
  }

  res.json(book);
});

//delete
app.delete("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);

  if (index === -1) {
    return res.json("book not found");
  }
  const removed = books.splice(index, 1);
  res.json("book deleted succesfully");
});
app.listen(PORT, () => {
  console.log(`app is running on "http://localhost:${PORT}`);
});
