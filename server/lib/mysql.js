const mysql = require('server/lib/mysql');
const config = require('../config/index');

const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
};

let products =
    `create table if not exists product(
        product_id INT(11) NOT NULL AUTO_INCREMENT,
        product_code VARCHAR(255) DEFAULT NULL,
        product_name VARCHAR(255) DEFAULT NULL,
        product_price FLOAT(11,2) unsigned NOT NULL DEFAULT '0.00',
        PRIMARY KEY (product_id)
)`;

let createTable = function(sql){
    return query(sql, []).catch(err=>{
        console.log(err)
    })
};

createTable(products);

let findProduct = function(code) {
    let sql = `select * from product where product_code="${code}";`
    return query(sql);
}

module.exports = {
    query,
    createTable,
    findProduct
}