let express = require('express');
let router = express.Router();


let a = require('./../controls/list')

router.get('/',function (req, res, next) {
    res.render('index', { title: 'rout' });
});

router.get('/userList',a.getUserList);
router.get('/carouselList',a.getCarouselList);
router.get('/hotCourse',a.getHotCourse);
router.get('/newCourse',a.getNewCourse);

router.post('/courseDetail',a.getCourseDetail);

router.post('/register',a.register);



router.post('/coursePage',a.getCoursePage);
router.post('/userDelete',a.delUser);



module.exports = router;
