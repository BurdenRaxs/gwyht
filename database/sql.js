module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryById: 'SELECT * FROM ?? WHERE ?? = ?',
    queryLimit: 'SELECT * FROM ?? LIMIT ?,?',
    del: 'DELETE FROM ?? WHERE ?? = ?',
    queryHot: 'select * from ?? h  JOIN courselist c on h.courseid=c.courseid',
    queryCart: 'select * from ?? h  JOIN courselist c on h.courseid=c.courseid WHERE ?? = ?',
    register: 'INSERT INTO user (userid,username, password) VALUES (?,?,?)',
    addCart: 'INSERT INTO shopcart (userid,courseid) VALUES (?,?)',
    delCart: 'DELETE FROM ?? WHERE userid = ? and courseid = ?',
    addOrder: 'INSERT INTO orders (userid,userorder) VALUES (?,?)',
    changepass: 'UPDATE user set password= ? where userid= ? ;'
};