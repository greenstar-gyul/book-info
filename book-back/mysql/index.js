// mysql 모듈 로드
const mysql = require("mysql2");
const bookSqlList = require('../mysql/bookSql');

// mysql 접속 정보
const conn = {
  // 필수
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_DATABASE,
  connectionLimit: process.env.DB_LIMIT
};
// DB 커넥션 풀 생성
let pool = mysql.createPool(conn);

const query = (sqlKey, data) => {
  const sql = bookSqlList[sqlKey];
  return new Promise((resolve, reject) => {pool.query(sql, data, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    })
  })
};

module.exports = query;