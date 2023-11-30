// Create web server
// http://localhost:3000/comments

const express = require("express");
const app = express();

const comments = [
  { username: "Todd", comment: "lol that is so funny!" },
  { username: "Skyler", comment: "I like to go birdwatching with my dog" },
  { username: "Sk8erBoi", comment: "Plz delete your account, Todd" },
  { username: "onlysayswoof", comment: "woof woof woof" },
  { username: "iliketurtles", comment: "I like turtles!" },
];

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.post("/comments", (req, res) => {
  res.send("POST!");
});

app.put("/comments/:id", (req, res) => {
  res.send("PUT!");
});

app.delete("/comments/:id", (req, res) => {
  res.send("DELETE!");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});