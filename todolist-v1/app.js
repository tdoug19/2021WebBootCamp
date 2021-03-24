const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // A module we created


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
var listItems = [];
var workItems = [];

app.get("/", (req, res) => {
  
  res.render('list', {
    listTitle: date(),
    newListItems: listItems
  });
});

app.get("/work", (req, res) => {

  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", (req, res) => {

  res.render("about");
});


app.post("/", (req, res) => {

  if (req.body.list == 'Work')
  {
    workItems.push(req.body.listItem);
    res.redirect("/work");
  }
  else
  {
    listItems.push(req.body.listItem);
    res.redirect("/");
  }
});




app.listen(3000, () => {
  console.log(`app listening at port 3000`);
});
