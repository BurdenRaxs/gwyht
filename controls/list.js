let func = require('./../database/func')
let sql = require('./../database/sql')

module.exports = {
    getUserList (req, res) {
        func.connPool(sql.queryAll, 'user', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', user: rows});
        });
        // pool.getConnection((err,conn)=>{
        //     conn.query('select * from ??','user', function(err,result) {
        //         if (err) throw err;
        //         console.log('查询结果为: ', result);
        //         rows = result;
        //     });
        // })
        // res.json({code: 200, msg: 'ok', user: rows});
    },

    getCarouselList (req, res) {
        func.connPool(sql.queryAll, 'lunboimg', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', slides: rows});
        });

    },

    getHotList (req, res) {
        func.connPool(sql.queryAll, 'hotlist', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', hots: rows});
        });


    },

    getCourseList(req, res) {

        func.connPool(sql.queryAll, 'courselist', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', course: rows});
        });

    },



    getCoursePage(req, res) {
        let pageid = req.body.pageid;
        console.log(pageid);
        let p = (pageid-1)*25;
        console.log(p);
        // func.connPool(sql.queryAll, 'courselist', (err,result) => {
        //     let rows = result;
        //     let rows1 = rows.slice(25,50);
        //     console.log('查询结果为: ', rows1);
        //     res.json({code: 200, msg: 'ok', course: rows1});
        // });

        func.connPool(sql.queryLimit, ['courselist',p,p+25], (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', course: rows});
        });
    },

    getSortCourse(req, res) {
        let coursetype = req.body.type;

        if(coursetype==1){
            func.connPool(sql.queryLimit, ['courselist',0,25], (err,result) => {
                let rows = result;
                console.log('查询结果为: ', rows);
                res.json({code: 200, msg: 'ok', course: rows});
            });
        }
        else {
            func.connPool(sql.queryById, ['courselist','coursetype',coursetype-1], (err,result) => {
                let rows = result;
                console.log('查询结果为: ', rows);
                res.json({code: 200, msg: 'ok', course: rows});
            });
        }
    },


    delUser (req, res) {

        // let userid = req.body.id
        // console.log(userid)
        //
        // pool.getConnection((err,conn)=>{
        //     conn.query('DELETE FROM ?? WHERE userid=?',['user',userid], function(err,result) {
        //         if (err) throw err;
        //     });
        // })
        // res.json({code: 200, msg: 'ok', msg: 'done'});
        let userid = req.body.id
        console.log(userid)
        func.connPool(sql.del, ['user','userid',userid] , (err,result) => {
            res.json({code: 200, msg: 'ok', msg: 'done'});
        });
    }
}