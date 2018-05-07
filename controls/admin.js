let func = require('./../database/func')
let sql = require('./../database/sql')

module.exports = {

    addCourse (req, res) {
        let courseid = req.body.courseid;
        let coursename = req.body.coursename;
        let price = req.body.price;
        let imgurl = req.body.imgurl;
        let coursetype = req.body.coursetype;
        let bigimg = req.body.bigimg;
        let details = req.body.details;
        let describe = req.body.describe;
        let videourl = req.body.videourl;
        func.connPool("INSERT INTO ?? VALUES (?,?,?,?,?,?,?,?,?)",
            ['courselist',courseid,coursename,price,imgurl,coursetype,bigimg,details,describe,videourl], (err,result) => {
            res.json({code: 200, msg: 'ok'});
        });
    }

}