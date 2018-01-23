module.exports = {
    queryAll: 'SELECT * FROM ??',
    queryById: 'SELECT * FROM ?? WHERE ?? = ?',
    queryLimit: 'SELECT * FROM ?? LIMIT ?,?',
    del: 'DELETE FROM ?? WHERE ?? = ?',
    queryHot: 'select * from ?? h  JOIN courselist c on h.hot_courseid=c.courseid',
};