// ## Exercice 1.
// Écrivez une fonction qui prend un parametre, qui vérifie si ce parametre est un nombre qui retourne vrai si 
// c'est un nombre et faux dans le cas contraire. Vous devez utiliser [isNaN()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN) au sein de cette fonction.
// function number(para) {
//   return !isNaN(para);
// }
// console.log(number(2)); // true
// console.log(number("test")); // false

const { loadConfigFromFile } = require("vite");


// ## Exercice 2.
// Écrivez une fonction qui prend un parametre qui vérifie si ce parametre est un booleen qui retourne vrai si 
// c'est un booleen et faux dans le cas contraire. Vous devez utiliser `typeof` au sein de cette fonction.
// function booleen(para) {
//   return typeof para === 'boolean';
// }
// console.log(booleen(false)); // retoune true
// console.log(booleen(3)); // retourne false


// ## Exercice 3.
// Corriger la fonction suivante pour qu'elle retourne false.
// function checkEqual(a,b){
//   return a === b;
// }
// console.log(checkEqual(5,"5"));// false


// ## Exercice 4.
// Corriger la fonction suivante pour qu'elle retourne true
// function checkAge(a) {
//     return a > 10;
// }
// console.log(checkAge(12)); // true


// ## Exercice 5
// Completez la fonction suivante pour qu'elle retourne false. Vous devez utilisez un opérateur de négation
// function isNotAdmin(a) {
//     return !(a != 10)
// }
// console.log(isNotAdmin(true)); // false


// ## Exercice 6
// Écrivez une fonction JavaScript appelée `sommeChiffres` qui prend un tablau de nombres entier en entrée et 
// retourne la somme de ses chiffres. Par exemple, si l'entrée est `[1, 2, 3]`, la fonction devrait retourner 6 
// (car 1 + 2 + 3 = 6).
// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.
// function sommeChiffres(tab) {
//   let arr = 0;
//   for (let i = 0; i < tab.length; i++) {
//     arr += tab[i];
//   }
//   return arr
// }
// console.log(sommeChiffres([1, 2, 3])); // Retourne 6


// ## Exercice 7 
// Écrivez une fonction JavaScript appelée `plusGrand` qui prend un tableau de nombres en entrée et 
// retourne le plus grand nombre du tableau.
// Vous devez utiliser des boucles `for` et ne pas utiliser de méthodes telles que `reduce`.
// function plusGrand(tab) {
//   if (tab.length === 0) {
//     return undefined;
//   }
//   let max = tab[0];
//   for (let i = 0; i < tab.length; i++) {
//     if (tab[i] > max) {
//       max = tab[i];
//     }    
//   }
//   return max;
// }
// console.log(plusGrand([3, 2, 6, 1, 4])); // retourne 6 


// ## Exercice 8
// Écrivez une fonction JavaScript appelée `trouverPlusLongMot` qui prend une chaîne de caractères (une phrase) en entrée
// et retourne le mot le plus long dans la phrase. Un mot est défini comme une série de caractères séparés 
// par des espaces.
// Vous devez utiliser des boucles `for`.
// function trouverPlusLongMot(mots) {
//     let phrase = mots.split(' ');
//     let motPlusLong = '';

//     for (let mot of phrase) {
//         if (mot.length > motPlusLong.length) {
//             motPlusLong = mot;
//         }
//     }
//     return motPlusLong;
// }
// console.log(trouverPlusLongMot("Ceci est une super phrase de test")); // Retourne phrase


// ## Exercice 9
// Écrivez une fonction JavaScript appelée triCroissant qui prend un tableau de nombres en entrée et 
// retourne le tableau trié par ordre croissant.
// Vous devez utiliser des boucles `for`.
// function triCroissant(tableau) {
// }
// console.log(triCroissant(["3, 2, 5, 6, 1"])); // Retourne ["1,2,3,5,6"] 


// ## Exercice 10
// Écrivez une fonction JavaScript appelée `inverserTableau` qui prend un tableau en entrée et 
// retourne un nouveau tableau contenant les éléments du tableau d'origine dans l'ordre inverse. 
// Par exemple, si le tableau d'entrée est [1, 2, 3], la fonction devrait retourner [3, 2, 1].
// Vous devez utiliser des boucles `for`.
// function inverserTableau(tableau) {
//     let tableauInverse = [];

//     for (let i = tableau.length; i >= 0; i--) {
//         tableauInverse.push(tableau[i])
//     }
//     return tableauInverse
// }
// console.log(inverserTableau([1, 2, 3])); // Retourne [3,2,1] 


// ## Exercice 11
// Écrivez une fonction JavaScript appelée `aDesDoublons` qui prend un tableau de mots en entrée et 
// retourne `true` si le tableau contient des éléments en double (doublons), sinon retourne `false`.
// Vous devez utiliser des boucles `for`.
// function aDesDoublons(tableau) {
//     for (let i = 0; i < tableau.length; i++) {
//         for (let j = i + 1 ; j < tableau.length; j++) {
//             if (tableau[i] === tableau[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(aDesDoublons(["mot", "stylo", "phrase", "mot", "jogging"])); // Retourne true
// console.log(aDesDoublons(["mot", "stylo", "phrase", "jogging"])); // Retourne false


// ## Exercice 12 (Pas compris)
// Écrivez une fonction JavaScript appelée `produitTableau` qui prend un tableau de nombres en entrée et 
// retourne le produit de tous les éléments du tableau.
// Vous devez utiliser des boucles `for`.
// function produitTableau(tableau) {
// }
// console.log(produitTableau([2, 3, 6]));


// ## Exercice 13
// Écrivez une fonction JavaScript appelée `rechercherElement` qui prend un tableau et un élément en entrée, 
// puis retourne true si l'élément est présent dans le tableau, sinon retourne false.
// Vous devez utiliser des boucles `for`.
// function rechercherElement(tableau, element) {
//     for (let i = 0; i < tableau.length; i++) {
//         if (tableau[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(rechercherElement(["chaise", "table", "vase"], "table")); // Retourne true
// console.log(rechercherElement(["chaise", "table", "vase"], "plateau")); // Retourne false


// ## Exercice 14
// Écrivez une fonction JavaScript appelée `fusionnerTableaux` qui prend deux tableaux en entrée et 
// retourne un nouveau tableau qui est la fusion des deux tableaux d'origine.
// Vous devez utiliser des boucles `for`.
// function fusionnerTableaux(tab1, tab2) {
//     let fusionner = [];
//     fusionner = fusionner.concat(tab1);

//     for (let i = 0; i < tab2.length; i++) {
//         fusionner = fusionner.concat(tab2[i]);
//     }
//     return fusionner;
// }
// console.log(fusionnerTableaux([2, 3, 4], [1, 2, 5])); // Retourne [2,3,4,1,2,5]

// Exercice 15
// Écrivez une fonction `mergeArray` qui prend deux paramètres `array1` et `array2`.
// Ces deux paramètres sont des tableaux de type number.
// Cette fonction retourne un tableau contenant les deux paramètres fusionnés.
// Vous devez obligatoirement utiliser une boucle `for`.
// Vous devez utiliser une méthode `contact`.
// function mergeArray(array1, array2) {
    // let mergedArray = [];

    // mergedArray = mergedArray.concat(array1);

    // for (let i = 0; i < array2.length; i++) {
    //     mergedArray = mergedArray.concat(array2[i]);
    // }
    // return mergedArray;
// }
// console.log(mergeArray([1, 3, 2], [4, 1, 3, 2])); // [1, 3, 2, 4, 1, 3, 2]


// Mars
// Exercice 1.
// Écrivez une fonction `isString` qui prend un parametre `myString`. 
// Cette fonction vérifie si ce parametre est une string (chaîne de caractèes).
// La fonction retourne vrai si c'est une string et faux dans le cas contraire.
// Vous devez utiliser `typeof` au sein de cette fonction
// function isString(myString) {
//     return typeof myString === 'string';
// }
// console.log(isString("Marc")); // true
// console.log(isString(2)); // false


// Exercice 2
// Écrivez une fonction `greetings` qui prend un paramètre `isStudent`.
// Ce paramètre est un booléen.
// S'il vaut `true` alors le message "Bienvenue cher élève" doit s'afficher.
// Sinon, le message "Bienvenue cher parent" s'affiche.
// function greetings(isStudent) {
//     if (isStudent === true) {
//         console.log("Bienvenue cher élèves");
//     } else {
//         console.log("Bienvenue cher parents");
//     }
// }
// (greetings(true));
// (greetings(false));


// Exercice 3
// Écrivez une fonction `checkWord` qui prend un paramètre `word`.
// Ce paramètre est une `string`.
// Si ce paramètre contient moins de 3 caractères, alors le message **Ce mot est trop court** 
// doit s'afficher. Sinon, la fonction affiche **Le mot ${word} est tout à fait correct**.
// function checkWord(word) {
//     if (word.length < 3) {
//         console.log("Ce mot est trop court");
//     } else {
//         console.log(`Le mot ${word} est tout à fait correct`);
//     }
// }
// (checkWord("qw"));
// (checkWord("pizza"));


// Exercice 4
// Écrivez une fonction `makeSum` qui prend deux paramètres `number1` et `number2`.
// Ces deux paramètres sont des nombres.
// Cette fonction retourne la `sum` de deux paramètres.
// function makeSum(number1, number2) {
//     let sum = number1 + number2;
//     return sum;
// }
// makeSum(2, 3); // Retourne 5


// Exercice 5
// Écrivez une fonction `makeSumFromArray` qui prend un paramètre `numbers`.
// Ce paramètre est un tableau de nombres.
// Cette fonction retourne la somme de tous les nombres du tableau.
// Vous devez obligatoirement utiliser une boucle `for`.
// function makeSumFromArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }
// makeSumFromArray([1, 2, 3, 5]); // Retourne 11

// Exercice 6
// Écrivez une fonction `findOddNumbers` qui prend un paramètre `numbers`.
// Ce paramètre est un tableau de nombres.
// Cette fonction retourne la somme de tous les nombres impairs présents dans le tableau.
// Vous devez obligatoirement utiliser une boucle `for`.
// function findOddNumbers(numbers) {
//     let arr = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             arr += numbers[i];
//         }
//     }
//     return arr;
// }
// findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21]); // Retourne 77

// Écrivez une fonction `findOddNumbers` qui prend un paramètre `numbers`.
// Ce paramètre est un tableau de nombres.
// Cette fonction retourne tous les nombres impairs présents dans le tableau.
// Vous devez obligatoirement utiliser une boucle `for`.
// function findOddNumbers(numbers) {
//     let arr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             arr.push(numbers[i]);
//         }
//     }
//     return arr;
// }
// findOddNumbers([1, 2, 5, 7, 8, 11, 13, 16, 19, 20, 21]); // [1, 5, 7, 11, 13, 19, 21]


// Exercice 7
// Écrivez une fonction `filterArray` qui prend un paramètre `myArray`.
// Ce paramète est un tableau contenant des nombres, des chaînes de caractère et des booléens.
// Cette fonction retourne un tableau ne contenant que des nombres.
// Vous devez obligatoirement utiliser une boucle `for`.
// function filterArray(myArray) {
//     let arr = [];
//     for (let i = 0; i < myArray.length; i++) {
//         if (typeof myArray[i] === 'number') {
//             arr.push(myArray[i]);
//         }
//     }
//     return arr;
// }
// filterArray([1, 2, true, "Tom", "Max", false, 4, 5, 6, "John"]); // [1, 2, 4, 5, 6]


// Exercice 8
// Écrivez une fonction `concatString` qui prend un paramètre `arrayOfStrings`.
// Ce paramètre est un tableau contenant des strings.
// Cette fonction retourne une string concaténant l'ensemble des strings contenant dans 
// le tableau `arrayOfStrings`. Vous devez obligatoirement utiliser une boucle `for`.
// function concatString(arrayOfStrings) {
//     let arr = "";
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (typeof arrayOfStrings[i] === 'string') {
//             arr += arrayOfStrings[i];
//         }
//     }
//     return arr;
// }
// console.log(concatString(["Un", " ", "code", " ", "de", " ", "qualité"])); // Retourne "Un code de qualité"


// Exercice 9
// Écrivez une fonction `findElementByWord` qui prend deux paramètre `arrayOfStrings` et `term`.
// Le premier paramètre est un tableau de strings et le deuxième une string.
// La fonction retourne `true` si l'élément `term` est présent dans le tableau.
// Sinon, elle retourne `false`.
// Vous devez obligatoirement utiliser une boucle `for`.
// function findElementByWord(arrayOfStrings, term) {
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         if (arrayOfStrings[i] === term) {
//             return true;
//         }
//     }
//     return false;
// }
// findElementByWord(["max", "peter", "john"], "peter"); // true
// findElementByWord(["max", "peter", "john"], "tom"); // false


// Exercice 10
// Écrivez une fonction `lowerCaseWords` qui prend un paramètre `arrayOfStrings`. 
// Ce paramètre est un tableau contenant des strings.
// Cette fonction retourne un tableau de strings en minuscules.
// Vous devez obligatoirement utiliser une boucle `for`.
// function lowerCaseWords(arrayOfStrings) {
//     let arr = [];
//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         let lowerCaseString = arrayOfStrings[i].toLowerCase();
//         arr.push(lowerCaseString);
//     }
//     return arr;
// }
// lowerCaseWords(["uN", " jOLI", " CheVAl ", "BlANc"]); // ["un", " joli", " cheval ", "blanc"]


// Exercice 11
// Écrivez une fonction `mergeArray` qui prend deux paramètres `array1` et `array2`.
// Ces deux paramètres sont des tableaux de type number.
// Cette fonction retourne un tableau contenant les deux paramètres fusionnés.
// Vous devez obligatoirement utiliser une boucle `for`.
// Vous ne devez pas utiliser une méthode `contact`
// function mergeArray(array1, array2) {
//     let arr = array1.length + array2.length;
//     let mergedArray = new Array(arr);
//     for (let i = 0; i < array1.length; i++) {
//         mergedArray[i] = array1[i];
//     }
//     for (let j = 0; j < array2.length; j++) {
//         mergedArray[array1.length + j] = array2[j];
//     }
//     return mergedArray;
// }
// mergeArray([1, 3, 2], [4, 1, 3, 2]); // [1, 3, 2, 4, 1, 3, 2]


// Exercice 12
// Écrivez une fonction `makeFriends` qui prend un paramètre `friends`.
// Ce paramètre est un tableau d'objets.
// Cette fonction retourne toutes les valeurs des propriétés `friends` dans un tableau de strings. Vous devez obligatoirement utiliser une boucle `for`.
// function makeFriends(friends) {
//     let friendsFirstNames = [];
//     for (let i = 0; i < friends.length; i++) {
//         let friend = friends[i];
//         friendsFirstNames.push(friend.firstName);
//     }
//     return friendsFirstNames;
// }
// const myFriends = [
//     {
//         firstName: "Max",
//         lastName: "Verstappen",
//         age: 27
//     },
//     {
//         firstName: "Lewis",
//         lastName: "Hamilton",
//         age: 37
//     },
//     {
//         firstName: "Daniel",
//         lastName: "Ricciardo",
//         age: 36
//     }
// ];
// makeFriends(myFriends); // ["Max", "Lewis", "Daniel"]


// Exercice 13
// Écrivez une fonction `findTeamPrincipal` qui prend un paramètre `people`.
// Ce paramètre est un tableau d'objets.
// Cette fonction retourne uniquement les objets contenant la valeur
// `isTeamPrincipal: true` sous forme de tableaux d'objets.
// Vous devez utiliser des boucles `for`.
// function findTeamPrincipal(people) {
// }

// let somePeople = [
//     {
//         firstName: 'Toto',
//         lastName: 'Wolff',
//         isTeamPrincipal: true
//     },
//     {
//         firstName: 'Lando',
//         lastName: 'Noris',
//         isTeamPrincipal: false
//     },
//     {
//         firstName: 'Oscar',
//         lastName: 'Piastri',
//         isTeamPrincipal: false
//     },
//     {
//         firstName: 'Christian',
//         lastName: 'Horner',
//         isTeamPrincipal: true
//     }
// ]
// console.log(findTeamPrincipal(somePeople));
/*
[
    {
        firstName: "Toto",
        isTeamPrincipal: true,
        lastName: "Wolff"
    },
    {
        firstName: "Christian",
        isTeamPrincipal: true,
        lastName: "Horner"
    }
]
*/


// Exercice 14
// Écrivez une fonction `findCar` qui prend deux paramètres `cars` et `query`.
// Le premier paramètre est un tableau d'objets et le deuxième une chaîne de caractères.
// Cette fonction retourne uniquement les objets dont la valeur de la propriété `brand`
// correspond au terme de `query`. Elle le retourne sous forme de tableaux d'objets.
// Vous devez utiliser des boucles `for`.
// function findCar(cars, query) {
//     let arr = [];
//     for (let i = 0; i < cars.length; i++) {
//         let car = cars[i];
//         if (car.brand === query) {
//             let matchingCar = {
//                 driver: car.driver,
//                 brand: car.brand,
//                 isFast: car.isFast
//             };
//             arr.push(matchingCar)
//         }
//     }
//     return arr;
// }

// let someCars = [
//     {
//         driver: "Esteban Ocon",
//         brand: "Alpine",
//         isFast: false
//     },
//     {
//         driver: "Charles Leclerc",
//         brand: "Ferrari",
//         isFast: true
//     },
//     {
//         driver: "Sergio Perrez",
//         brand: "Red Bull",
//         isFast: true
//     },
//     {
//         driver: "Pierre Gasli",
//         brand: "Alpine",
//         isFast: false
//     }
// ]
// console.log(findCar(someCars, "Alpine"));
/*
[
    {
        owner: "Esteban Ocon",
        brand: "Alpine",
        isFast: false
    },
    {
        driver: "Pierre Gasli",
        brand: "Alpine",
        isFast: false
    }
]
*/


// Exercice 15 (BONUS)
// Écrivez une fonction `repeatString` qui prend deux paramètres `str` et `num`.
// Le premier est de type string et le deuxième de type number.
// Cette fonction répète la chaîne de caractères `str` le nombre de fois précisé par `num`.
// Utilisez uniquement des boucles `for`.
// function repeatString(str, num) {
//     if (num <= 0) {
//         return '';
//     }
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += str;
//     }
//     return result;
// }
// console.log(repeatString("qsdf", 3)); // qsdfqsdfqsdf