const express = require("express");
const tarotData = require('../tarot-images.json');
const tarotImages = require('../cards');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req,res) => {
res.json(tarotData)
})

router.get('/images/:imageName', function(req, res) {
  var image = req.params['imageName'];
  res.readFile(image, 'utf8', function(err, data){
    if(err){
      res.end(404);
    }
    res.send(data)    
  });
});



app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
});
