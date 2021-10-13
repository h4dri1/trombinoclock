const dataMapper = require('../dataMapper');

let prom = [];

const promoController = {
    promosList: (req, res) => {
        dataMapper.getAllPromos((err, results) => {
            if(err)
                return res.status(500).send(err);
            prom = results.rows;
            res.render('promos', {
                promos: results.rows
            });
        })
    },

    promoPage: (req, res, next) => {
        const id = Number(req.params.id);
        dataMapper.getPromoById(id, (err, results) => {
            if(err)
                return res.status(500).send(err);
            if(results.rows !== undefined) {
                res.render('promo_detail', {
                    targetPromo: results.rows[0].id,
                    promos: prom
                });  
            } else {
                next();
            }
        });
    }
};

module.exports = promoController;