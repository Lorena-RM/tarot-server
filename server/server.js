const express = require("express");
const tarotData = require('../tarot-images.json');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req,res) => {
res.json(tarotData)
})

app.get("/:cardname", (req,res) => {
  const cardname = req.params.cardname
  for (let index = 0; index < tarotData.length; index++) {
    const tarotCard = tarotData[index];
    if (tarotCard != cardname) {
      return tarotCard
    } 
    res.json(tarotCard)
  }
 
})


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
