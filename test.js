// on commence par require le module
const {
    Client
} = require('pg');


// ensuite, on a suivi la doc pour créer la co a la BBD
// avec une connection string
// const client = new Client('postgresql://etudiant:js4life@pg.oclock.lan:5432/trombi');

const client = new Client({
    user: 'etudiant',
    host: 'pg.oclock.lan',
    database: 'trombi',
    password: 'js4life',
    port: 5432,
});

client.connect();

// client.query(REQUETE, CALLBACK)
// En fait, on ne sait jamais a quel moment la BDD va répondre. 
// On doit donc passer à la fonction "query" un CALLBACK,
// c'est-à-dire une fonction de retour. 
// Lorsque la BDD va répondre, 
// notre module pg va se charger 
// d'appeler le callback en lui passant la réponse de la BDD.

const dbQuery = `SELECT * FROM "student" WHERE "promo_id" = 1;`;

const callback = (err, result) => {
    if (err)
        console.error(err);

    console.log(result.rows);
    client.end();
};

client.query(dbQuery, callback);