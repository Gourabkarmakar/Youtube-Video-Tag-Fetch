const express = require("express");
const port = 3000;
const getYouTubeID = require("get-youtube-id");
const ytbTags = require("youtube-tags");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/tagfind", async (req, res) => {
  var url = req.body.url;
  console.log(url);
  var id = getYouTubeID(url);
  console.log(id);
  const tags = await ytbTags.getYoutubeTags(id);
    
  res.send(tags);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
