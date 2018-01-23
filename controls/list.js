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

    getHotCourse (req, res) {
        func.connPool(sql.queryHot, 'hotcourse', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', hots: rows});
        });
    },

    getNewCourse (req, res) {
        func.connPool(sql.queryHot, 'newcourse', (err,result) => {
            let rows = result;
            console.log('查询结果为: ', rows);
            res.json({code: 200, msg: 'ok', news: rows});
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
        let p = (pageid-1)*25;

        let coursetype = req.body.type;

        if(coursetype == 1){
            func.connPool(sql.queryAll, 'courselist', (err,result) => {
                let rows = result;
                let lens = rows.length;
                let sortedrows = rows.slice(p,p+25);

                console.log('查询结果为: ', sortedrows);
                res.json({code: 200, msg: 'ok', course: sortedrows , len :lens});
            });
        }else {
            func.connPool(sql.queryById, ['courselist','coursetype',coursetype-1], (err,result) => {
                let rows = result;
                let lens = rows.length;
                let sortedrows = rows.slice(p,p+25);
                console.log('查询结果为: ', sortedrows);
                res.json({code: 200, msg: 'ok', course: sortedrows , len :lens});
            });
        }


    },

    // getSortCourse(req, res) {
    //     let coursetype = req.body.type;
    //
    //     if(coursetype==1){
    //
    //         func.connPool(sql.queryAll, 'courselist', (err,result) => {
    //             let rows = result;
    //             let lens = rows.length;
    //             let sortedrows = rows.slice(0,25);
    //             console.log('查询结果为: ', sortedrows);
    //             res.json({code: 200, msg: 'ok', course: sortedrows , len :lens});
    //         });
    //     }
    //     else {
    //         func.connPool(sql.queryById, ['courselist','coursetype',coursetype-1], (err,result) => {
    //             let rows = result;
    //             let lens = rows.length;
    //             let sortedrows = rows.slice(0,25);
    //             console.log('查询结果为: ', sortedrows);
    //             res.json({code: 200, msg: 'ok', course: sortedrows , len :lens});
    //         });
    //     }
    // },


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