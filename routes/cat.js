var express = require('express');
const cat_controlers= require('../controllers/cat');
var router = express.Router();
/* GET costumes */
router.get('/', cat_controlers.cat_view_all_Page );
module.exports = router;
/* GET detail cat page */
router.get('/detail', cat_controlers.cat_view_one_Page);
/* GET create cat page */
router.get('/create', cat_controlers.cat_create_Page);
/* GET create update page */
router.get('/update', cat_controlers.cat_update_Page);
/* GET delete costume page */
router.get('/delete', cat_controlers.cat_delete_Page);



