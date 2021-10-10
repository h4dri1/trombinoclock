// on commence par require le module
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

const dbQuery = `SELECT * FROM "promo" ORDER BY name;`;

const callback = (err, result) => {
    if (err)
        console.error(err);

    console.log(result.rows);
    client.end();
};

client.query(dbQuery, callback);