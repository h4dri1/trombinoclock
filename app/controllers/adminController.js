const dataMapper = require('../dataMapper');

const adminController = {
    adminPanel: (req, res) => {
        if(req.session.login !== process.env.ADMIN_USER && req.session.password !== process.env.ADMIN_PASS) {
            if(req.session.login !== undefined) {
                res.render('login', {
                    status: 'Erreur'
                });
            } else {
                res.render('login', {
                    status: 'Login'
                });
            }
        } else {
            dataMapper.getAllPromos((err, results) => {
                if(err)
                    return res.status(500).send(err);
                res.render('admin', {
                    promoList: results.rows
                });
            });
        }
    },

    addStudent: (req, res) => {
        const studentInfo = req.body;
        if(req.session.login !== process.env.ADMIN_USER && req.session.password !== process.env.ADMIN_PASS) {
            if(req.session.login !== undefined) {
                res.render('login', {
                    status: 'Mauvais mdp/user'
                });
            } else {
                res.render('login', {
                    status: 'Login'
                });
            }
        } else {
            dataMapper.addStudent(studentInfo, (err, results) => {
                if(err)
                    return res.status(500).send(err);
                res.redirect(`/promo/${studentInfo.promo}/students`);
            });
        }
    }
}

module.exports = adminController;