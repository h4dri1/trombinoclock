const dataMapper = require('../dataMapper');

const adminController = {
    adminPanel: (req, res) => {
        dataMapper.getAllPromos((err, results) => {
            if(err)
                return res.status(500).send(err);
            res.render('admin', {
            promoList: results.rows
            });
        });
    },

    addStudent: (req, res) => {
        const studentInfo = req.body;
        dataMapper.getAllPromos((err, results) => {
            if(err)
                return res.status(500).send(err);
            if(!results)
                return res.status(500).send('aucune enregistrement crée')
            const res1 = results.rows;
            dataMapper.addStudent(studentInfo, (err, results) => {
                if(err)
                    return res.status(500).send(err);
                res.render('promo_detail', {
                    targetPromo: studentInfo.promo,
                    promos: res1
                });
            });
        });
    }
}

module.exports = adminController;