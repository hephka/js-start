"use strict"
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?"
let answer = prompt(question)
// utilise console.log pour vérifier le type de answer
console.log(typeof answer)
// convertis answer en type number
answer = answer.trim() === "" ? NaN : Number(answer)
// answer = +answer

/* Après la conversion les valeur numérique deviennent les nombres, par exemple '12' devient 12
  par contre les saisis non-numérique sont transformées en NaN ('haha' -> NaN)
*/

// On peut utiliser la fonction isNaN(answer) pour vérifier si la saisie est numérique

// affiche un de messages suivants selon le cas :
if (isNaN(answer)) {
  alert("vous n'avez pas saisi de valeur numérique correcte")
} else if (answer < 2015) {
  alert("non c'était plus tard")
} else if (answer > 2015) {
  alert("non c'était avant")
} else {
  alert(" Bravo c'est une bonne réponse !")
}
// vous n'avez pas saisi de valeur numérique correcte
// non c'était plus tard
// non c'était avant
// Bravo c'est une bonne réponse !
