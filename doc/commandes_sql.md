## Connection à la base 
- `psql -h pg.oclock.lan -U etudiant -d trombi`
    - `psql` : La "console" PostGreSQL
    - `-h` : Le hôte sur lequel on se connecte 
      - `pg.oclock.lan` : Le hote
    - `-U` : L'utilisateur de connection
    - `-d` : La base de donnée que l'on souhaite utiliser 

- mdp : js4life
  
## Commandes SQL
- \dt : display tables. Afficher les tables
- \d <table> : Afficher le détail d'une table
- SELECT * FROM "students";
  - Tout selectionner depuis la table "students"
  - SELECT _(ce qu'on veut)_ FROM **(table)**;
- SELECT * FROM "student" WHERE "first_name" = 'Phoebe';
  - Selectionner tout depuis la table student ou le prénom est égal à Phoebe