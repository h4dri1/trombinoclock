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

    removeStudent: (studentInfo, callback) => {
        const text = `DELETE FROM student WHERE first_name = $1 AND last_name = $2 AND github_username = $3 AND promo_id = $4;`;
        const values = [studentInfo.first_name, studentInfo.last_name, studentInfo.github_username, Number(studentInfo.promo)];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    addPromo: (promoInfo, callback) => {
        console.log(promoInfo);
        const text = `INSERT INTO "promo" ("id", "name", "github_organization") VALUES ((SELECT MAX(id)+1 FROM promo), $1, $2);`;
        const values = [promoInfo.name, promoInfo.github_organization];
        client.query(text, values, (err, results) => {
            callback(err, results);
        });
    },

    removePromo: (promoInfo, callback) => {
        const text = `DELETE FROM promo WHERE name = $1 AND github_organization = $2;`;
        const values = [promoInfo.name, promoInfo.github_organization];
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