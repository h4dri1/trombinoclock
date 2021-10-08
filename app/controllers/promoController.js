const promos = require('../../data/promos.json');

const promoController = {
    promosList: (req, res) => {
        res.render('promos', {
            promos: promos
        });
    },

    promoPage: (req, res, next) => {
        // req.params.id => L'id de la promo 
        const id = Number(req.params.id);

        // let promo = null;
        // for (let i = 0; i < promos.length; i++) {
        //     if (promos[i].id === id) {
        //         promos = promos[i];
        //         break;
        //     }
        // }

        // Je récupère l'élément qui correspond à id (undefined si non trouvé)
        const promo = promos.find(p => p.id === id);

        if (promo !== undefined) {
            res.render('promo_detail', {
                promo: promo
            });
        } else {
            next();
        }
        // Afficher la page du détail d'une promotion
    }
};

module.exports = promoController;