"use strict"
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?"
let answer = prompt(question)
// utilise console.log pour vérifier le type de answer

// convertis answer en type number

/* Après la conversion les valeur numérique deviennent les nombres, par exemple '12' devient 12
  par contre les saisis non-numérique sont transformées en NaN ('haha' -> NaN)
*/

// On peut utiliser la fonction isNaN(answer) pour vérifier si la saisie est numérique

// affiche un de messages suivants selon le cas :
// vous n'avez pas saisi de valeur numérique correcte
// non c'était plus tard
// non c'était avant
// Bravo c'est une bonne réponse !
