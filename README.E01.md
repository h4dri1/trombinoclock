Application de trombinoscope pour le compte du client Nicole

## Challenge Épisode 1

### Étape 1: détails d'une promo

Le client veut savoir à quoi cette page va ressembler. Donc on va lui fournir un wireframe !

:link: Liens utiles (ou pas, à vous de voir)
- https://www.draw.io/
- https://wireframe.cc/example
- https://www.figma.com/
- [Le meilleur outil](https://www.versionecologique.com/418-crayon-papier)

Ne pas savoir à quoi ça va ressembler ne nous empêche pas de commencer à coder ! C'est parti pour implémenter la route `/promo/:id`.  
_note: cette partie a peut-être déjà été implémentée en cockpit_

<details>
<summary>Un petit coup de main</summary>

Il nout faut:
- une nouvelle view
- une route paramétrée
- une nouvelle méthode dans le controller `promoController`. Cette méthode doit :
    - récupérer l'id de la promo ciblée
    - trouver la bonne promo dans la liste des promos. Utiliser une boucle, ou [`.find`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find#syntaxe)
    - "render" la view, sans oublier de lui transmettre les données !
</details>

### Étape 2: étudiants d'une promo

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

<details>
<summary>Énoncé détaillé</summary>

- La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID. par exemple `/promo/:id/students`
- La méthode associée doit être dans un controller. Soit `promoController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !
- Dans cette méthode il faut :
    - récupérer l'id de la promo ciblée
    - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntaxe).
    - "render" la view, sans oublier de lui transmettre les données !
- Contruire la view en listant les étudiants
- Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".
</details>