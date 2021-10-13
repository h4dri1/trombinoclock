const client = require('./db_client');

const dataMapper = {
    getAllPromos: (callback) => {
        client.query(`SELECT * FROM "promo" ORDER BY name;`, (err, results) => {
            callback(err, results);
        });
    },

    getPromoById: (id, callback) => {
        const text = `SELECT id, name, github_organization FROM "promo" WHERE id = $1;`;
        const values = [id];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    getStudentsByPromo: (promoId, callback) => {
        const text = `SELECT * FROM "student" WHERE promo_id = $1;`;
        const values = [promoId];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    getStudentById: (id, callback) => {
        const text = `SELECT * FROM "student" WHERE id = $1;`;
        const values = [id];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    addStudent: (studentInfo, callback) => {
        const text = `INSERT INTO "student" ("first_name","last_name","github_username", "profile_picture_url", "promo_id") VALUES ($1, $2, $3, $4, $5);`;
        const values = [studentInfo.first_name, studentInfo.last_name, studentInfo.github_username, `https://github.com/${studentInfo.github_username}.png`, Number(studentInfo.promo)];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    getStudentByResearch: (research, callback) => {
        const text = `SELECT * FROM "student" WHERE first_name = $1 OR last_name = $1;`;
        const values = [research];
        client.query(text, values, (err, results) => {
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