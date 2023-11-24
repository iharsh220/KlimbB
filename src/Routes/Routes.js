var express = require('express');

var router = express.Router();

const {
    StoreData,
    FindData,
    UpdateData,
    DeleteData
} = require('../Controller/DataController');


router.post('/logistics', StoreData); //Store Data 
router.get('/logistics/:id', FindData); //Find Data 
router.put('/logistics/:id', UpdateData); //update Data 
router.delete('/logistics/:id', DeleteData); //Delete Data 


//export this router to use in our index.js
module.exports = router;