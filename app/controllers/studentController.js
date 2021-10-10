const {
    Client
} = require('pg');

const client = new Client({
    user: 'etudiant',
    host: 'pg.oclock.lan',
    database: 'trombi',
    password: 'js4life',
    port: 5432,
});

client.connect();

const studentController = {
    studentsByPromo: (req, res, next) => {
        const promoId = Number(req.params.id);

        client.query(`SELECT * FROM "student" WHERE promo_id = '${promoId}';`, (err, results) => {
            if(err) {
                console.error(err);
            }
            if(results !== undefined && results.rows.length > 0) {
                res.render('promo_students', {
                    students: results.rows
                });    
            } else {
                client.end();
                next();
            }
        });
    },

    studentDetails: (req, res, next) => {
        const id = Number(req.params.id);

        client.query(`SELECT * FROM "student" WHERE id = '${id}';`, (err, results) => {
            if(err) {
                console.error(err);
            }
            if(results !== undefined && results.rows.length > 0) {
                res.render('details', {
                    student: results.rows[0]
                });    
            } else {
                client.end();
                next();
            }
        });
    }
}

module.exports = studentController;