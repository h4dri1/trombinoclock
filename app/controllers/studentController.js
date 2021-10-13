const dataMapper = require('../dataMapper');

let stud = [];

const studentController = {
    studentsByPromo: (req, res, next) => {
        const promoId = Number(req.params.id);
        dataMapper.getStudentsByPromo(promoId, (err, results) => {
            if(err)
                return res.status(500).send(err);
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
        dataMapper.getStudentById(id, (err, results) => {
            if(err)
                return res.status(500).send(err);
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