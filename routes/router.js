let express = require('express');
let router = express.Router();


let a = require('./../controls/list')

router.get('/',function (req, res, next) {
    res.render('index', { title: 'rout' });
});

router.get('/userList',a.getUserList);
router.get('/carouselList',a.getCarouselList);
router.get('/hotList',a.getHotList);
router.get('/courseList',a.getCourseList);


router.post('/coursePage',a.getCoursePage);
router.post('/userDelete',a.delUser);
router.post('/courseSort',a.getSortCourse);


module.exports = router;
