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

router.post('/getUserCourse',a.getUserCourse);
router.post('/getUserOrder',a.getUserOrder);

router.post('/courseDetail',a.getCourseDetail);

router.post('/register',a.register);
router.post('/login',a.login);
router.post('/getcart',a.getCart);
router.post('/addcart',a.addCart);
router.post('/delcart',a.delCart);
router.post('/pay',a.getPay);



router.post('/coursePage',a.getCoursePage);

router.post('/changePassword',a.changePassword);
// router.post('/userDelete',a.delUser);



module.exports = router;
