const express = require("express");
const tarotData = require("./db/tarot-images.json");
const { readFromFile } = require("./helpers/fsUtils");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json(tarotData);
});

app.get("/:id", (req, res) => {
  const cardId = req.params.id;
  const finalSentence = cardId.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    console.log(finalSentence)
  readFromFile("./db/tarot-images.json")
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((card) => card.name === finalSentence);
      return result.length > 0
        ? res.json(result)
        : res.json("No Card with that ID");
    });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
