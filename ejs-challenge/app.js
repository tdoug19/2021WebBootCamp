//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Home Page for our Blog";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

let posts = [];  // var is function scope and let is block scope.

app.set('view engine', 'ejs');
/**
* A template engine enables you to use static template files in your application.
* At runtime, the template engine replaces variables in a template file with actual
* values, and transforms the template into an HTML file sent to the client. This
* approach makes it easier to design an HTML page.
*/

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", (req, res) => {

  res.render('home',{
    startingContent: homeStartingContent,
    posts: posts
  });



});

app.get("/about", (req, res) => {

  res.render('about',{
    aboutContent: aboutContent
  });
});

app.get("/contact", (req, res) => {

  res.render('contact',{
    contactContent: contactContent
  });
});

app.get("/compose", (req, res) => {

  res.render('compose');
});

app.post("/compose", (req, res) => {

  const post = {
    postTitle:req.body.postTitle,
    blogPost:req.body.blogPost
  };
  posts.push(post);
  res.redirect("/");
});





app.listen(3000, function() {
  console.log("Server started on port 3000");
});
