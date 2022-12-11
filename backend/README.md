# poe-fakeserver
Un serveur JSON Fake basé sur json-server

## Installation

Après avoir récupéré le projet via la commande `git clone` (voir bouton en haut à droite), les dépendances s'intallent via la commande standard :

`npm install`

et le serveur se lance via le script start invoqué par la commande :

`npm start`

Le serveur sera alors lancé sur `http://localhost:3000/` et peut être interrogé via votre navigateur web (par exemple sur `http://localhost:3000/users`) ou via un outil REST tel que [Postman](https://www.postman.com).

Parmi les requêtes possibles, on peut limiter le nombre de résultats par page via :

`http://localhost:3000/users?_limit=12`

`http://localhost:3000/users?_limit=12&_page=2`

Accéder à un utilisateur par son id:

`http://localhost:3000/users/664dd8b5-0de2-415b-bf23-065d2c078032`

Rechercher des chaines dans les différents attributs :

`http://localhost:3000/users?lastname_like=na` (regExp supportées)

Et les requêtes REST standard sont gérées telles que:
````
POST   /users
PUT    /users/664dd8b5-0de2-415b-bf23-065d2c078032
PATCH  /users/664dd8b5-0de2-415b-bf23-065d2c078032
DELETE /users/664dd8b5-0de2-415b-bf23-065d2c078032
````

Pour une documentation plus complète, voir [la documentation de json-server](https://www.npmjs.com/package/json-server).

## Génération de nouvelles données via [faker](https://github.com/marak/Faker.js/) (optionnel)

`npm run generate`

