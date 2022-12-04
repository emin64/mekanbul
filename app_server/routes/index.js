var express = require('express');
var router = express.Router();
var ctrlMekanlar=require('../controlles/mekanlar')
var ctrlDigerleri=require('../controlles/digerleri')

/* GET home page. */
router.get('/',ctrlMekanlar.anaSayfa );
router.get('/mekan',ctrlMekanlar.mekanBilgisi );
router.get('/mekan/yorum/yeni',ctrlMekanlar.yorumEkle );
router.get('/hakkinda',ctrlDigerleri.hakkinda );



module.exports = router;