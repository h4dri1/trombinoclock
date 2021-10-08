## Challenge Épisode 2

### Étape 1: écrire du SQL
Dans le dossier doc, créer un fichier sql.md. Dans ce fichier, écrire les requêtes SQL pour obtenir les informations suivantes :

- toutes les promos, dans l'ordre alphabétique
- tous les étudiants, dans l'ordre alphabétique des noms de famille
- tous les étudiants de la promo 135
- les étudiants dont le nom ou le prénom ressemble à "max"

### Étape 2: SQL + Express

En s'inspirant de ce qui a été fait en cockpit, modifier la fonctionnalité "liste des promos" pour qu'elle utilise une requête SQL !

<details>
<summary>Un coup de main</summary>

Toutes les modifs vont se passer dans le fichier `promoController.js` !

- D'abord il faut pouvoir parler à la base de données. Donc il nous faut un client. Créer et connecter un client `pg`, juste avant la définition du controller.
- Puis dans la méthode qui liste des promos, il faut exécuter une requête SQL !
- Ne pas oublier que la méthode `client.query` ne renvoie pas directement les résultats, il faut définir un _callback_.
```js
  promoList: (req, res) => {
      //...
      client.query('du sql', (error, results) => {
          // cette fonction se déclenchera quand la BDD aura répondu.
          // c'est ici qu'il faut soit traiter l'erreur si il y en a une, soit utiliser les résultats !
      });
      // pas de code ici : on ne fait rien tant que la BDD n'a pas répondu!
  }
```
</details>

### Bonus 1: intégration des views HTML

2 solutions au choix :
- Utiliser l'intégration fournie.
- Faire les views et le CSS à la main !

### Bonus 2: détails et liste des étudiants

Sur le même principe que l'étape 2, modifier les fonctionnalités "détails d'une promo" et "liste des étudiants d'une promo" en utilisant une reqûete SQL.