const express = require('express');

const download = require('./download');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/download', download);

module.exports = router;
