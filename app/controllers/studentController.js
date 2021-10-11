const {
    Client
} = require('pg');

const client = new Client({
    user: 'trombi',
    host: '127.0.0.1',
    database: 'trombi',
    password: 'cool',
    port: 5432,
});

client.connect();

let stud = [];

const studentController = {
    studentsByPromo: (req, res, next) => {
        const promoId = Number(req.params.id);

        client.query(`SELECT * FROM "student" WHERE promo_id = '${promoId}';`, (err, results) => {
            if(err) {
                console.error(err);
            }
            stud = results.rows;
            if(results.rows !== undefined) {
                res.render('promo_students', {
                    students: results.rows
                });    
            } else {
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
            if(results.rows !== undefined) {
                res.render('details', {
                    targetStudent: results.rows[0], 
                    students: stud                  
                });
            } else {
                next();
            }
        });
    }
}

module.exports = studentController;