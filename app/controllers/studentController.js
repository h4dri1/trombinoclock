const students = require('../../data/students.json');

const studentController = {
    studentsByPromo: (req, res) => {
        const promoId = Number(req.params.id);

        // // façon numéro 1 
        // const filteredStudents = [];
        // for (let student of students) {
        //     if (student.promo === promoId) {
        //         filteredStudents.push(student);
        //     }
        // }

        //façon numéro 2
        // On récupère que les étudiant avec la promo équivalent à promoId
        const filteredStudents = students.filter((student) => {
            return student.promo === promoId
        });

        res.render('promo_students', {
            students: filteredStudents
        });
    }
}

module.exports = studentController;