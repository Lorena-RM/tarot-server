const express = require("express");
const tarotData = require('./db/tarot-images.json');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req,res) => {
res.json(tarotData)
})

app.get("/:cardNumber", (req,res) => {
  const cardname = req.params.cardNumber
  res.json(tarotData).then((tarotData)=>{
    for (let index = 0; index < tarotData.length; index++) {
      const tarot = tarotData[index];
      console.log(tarot)
      // if (tarot = cardname) {
      //   return tarot
      // } 
      // res.json(tarot)
    }
  })
 
})

//I think we might have to add routes too the tarot keeper project im not completly sure how only one JSON would allow us to manipulate it into the actual project

// app.get('/:id', (req, res) => {
//   tarotData.findOne({
//     where: {
//       id: req.params.id,
//     }
//   })
//     .then((data) => res.json(data))
//     .catch((err) => res.status(400).json(err));
// });


app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
