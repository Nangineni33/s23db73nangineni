var express = require('express');
const cat_controlers= require('../controllers/cat');
var router = express.Router();
/* GET costumes */
router.get('/', cat_controlers.cat_view_all_Page );
module.exports = router;
