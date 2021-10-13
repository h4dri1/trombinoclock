const client = require('./db_client');

const dataMapper = {
    getAllPromos: (callback) => {
        client.query(`SELECT * FROM "promo" ORDER BY name;`, (err, results) => {
            callback(err, results);
        });
    },

    getPromoById: (id, callback) => {
        client.query(`SELECT id, name, github_organization FROM "promo" WHERE id = '${id}';`, (err, results) => {
            callback(err, results);
        });
    },

    getStudentsByPromo: (promoId, callback) => {
        client.query(`SELECT * FROM "student" WHERE promo_id = '${promoId}';`, (err, results) => {
            callback(err, results);
        });
    },

    getStudentById: (id, callback) => {
        client.query(`SELECT * FROM "student" WHERE id = '${id}';`, (err, results) => {
            callback(err, results);
        });
    },

    addStudent: (studentInfo, callback) => {
        client.query(`INSERT INTO "student" ("first_name","last_name","github_username", "promo_id") VALUES ('${studentInfo.first_name}', '${studentInfo.last_name}', '${studentInfo.github_username}', ${Number(studentInfo.promo)});`, (err, results) => {
            callback(err, results);
        });
    },

    getStudentByResearch: (research, callback) => {
        client.query(`SELECT * FROM "student" WHERE first_name = '${research}' OR last_name = '${research}';`, (err, results) => {
            callback(err, results);
        });
    },

    getNumberOf: (callback) => {
        client.query(`SELECT COUNT(*) FROM student UNION SELECT COUNT(*) FROM promo;`, (err, results) => {
            callback(err, results);
        });
    }
}

module.exports = dataMapper;