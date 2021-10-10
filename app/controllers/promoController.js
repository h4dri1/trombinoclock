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

const promoController = {
    promosList: (req, res) => {
        client.query(`SELECT * FROM "promo" ORDER BY name;`, (err, results) => {
            if(err) {
                console.error(err);
            }
            res.render('promos', {
                promos: results.rows
            });
        });
    },

    promoPage: (req, res, next) => {
        // req.params.id => L'id de la promo 
        const id = Number(req.params.id);
        client.query(`SELECT id, name, github_organization FROM "promo" WHERE id = '${id}';`, (err, results) => {
            if(err) {
                console.error(err);
            }
            if(results !== undefined && results.rows.length > 0) {
                res.render('promo_detail', {
                    promo: results.rows[0]
                });  
            } else {
                client.end();
                next();
            }
        });
    }
};

module.exports = promoController;