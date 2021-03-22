const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
var listItems = [];
var workItems = [];

app.get("/", (req, res) => {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render('list', {
    listTitle: "Task List",
    newListItems: listItems
  });
});

app.get("/work", (req, res) => {

  console.log(workItems);

  res.render('list', {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", (req, res) => {

  res.render("about");
});


app.post("/", (req, res) => {
  console.log(req.body.list);
  if (req.body.list == 'Work')
  {
    console.log("Pushing" + req.body.listItem);
    workItems.push(req.body.listItem);
    res.redirect("/work");
  }
  else
  {
    listItems.push(req.body.listItem);
    console.log(req.body);
    res.redirect("/");
  }
});




app.listen(3000, () => {
  console.log(`app listening at port 3000`);
});
