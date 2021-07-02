const express = require('express');
var ffprobe = require('ffprobe'),
    ffprobeStatic = require('ffprobe-static');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});


router.get('/convert', async (req, res) => {

  const title = req.query.title;

  if(title){
    ffprobe('/var/www/html/downloads/' + title, {
      path: ffprobeStatic.path
    }, function (err, info) {
      if (err) return console.log(err);
      res.json(info);
    })
  }

})

module.exports = router;