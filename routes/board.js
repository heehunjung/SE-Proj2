var express = require('express');
var router = express.Router();
var listController = require('../controllers/listControllers');
var writeController = require('../controllers/writeControllers');
var readController = require('../controllers/readControllers');
var updateController = require('../controllers/updateControllers');
var deleteContorller = require('../controllers/deleteControllers');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', listController.getListFirst); 
router.get('/list/:id',listController.getList);

router.get('/write', writeController.writeForm);
router.post('/write', upload.single('image_data'), writeController.writeData);

router.get('/read/:id',readController.readData);

router.get('/update',updateController.updateForm);
router.post('/update',multer().none(), (req,res)=> {updateController.updateData(req,res)})

router.post('/delete', deleteContorller.deleteData);

module.exports = router;