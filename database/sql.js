module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryById: 'SELECT * FROM ?? WHERE ?? = ?',
    queryLimit: 'SELECT * FROM ?? LIMIT ?,?',
    del: 'DELETE FROM ?? WHERE ?? = ?',
    queryHot: 'select * from ?? h  JOIN courselist c on h.courseid=c.courseid',
    register: 'INSERT INTO user (userid,username, password) VALUES (?,?,?)'
};