const express = require('express');
var ffprobe = require('ffprobe'),
  ffprobeStatic = require('ffprobe-static');
const router = express.Router();
var ffmpeg = require('ffmpeg');

router.get('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});


router.get('/convert', async (req, res) => {

  const title = req.query.title;

  if (title) {
    ffprobe('/var/www/html/downloads/' + title, {
      path: ffprobeStatic.path
    }, function (err, info) {
      if (err) return console.log(err);
      res.json(info);
    })



    try {
      var process = new ffmpeg('/var/www/html/downloads/'+title);
      process.then(function (video) {

        video
          .setVideoFormat('mp4')
          .save('/var/www/html/downloads/test.mp4', function (error, file) {
              console.log(error);  
            if (!error)
              console.log('Video file: ' + file);
          });

      }, function (err) {
        console.log('Error: ' + err);
      });
    } catch (e) {
      console.log(e.code);
      console.log(e.msg);
    }
  }

})

module.exports = router;