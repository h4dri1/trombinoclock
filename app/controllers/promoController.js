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

let prom = [];

client.connect();

const promoController = {
    promosList: (req, res) => {
        client.query(`SELECT * FROM "promo" ORDER BY name;`, (err, results) => {
            if(err) {
                console.error(err);
            }
            prom = results.rows;
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
            if(results.rows !== undefined) {
                res.render('promo_detail', {
                    targetPromo: results.rows[0],
                    promos: prom
                });  
            } else {
                next();
            }
        });
    }
};

module.exports = promoController;