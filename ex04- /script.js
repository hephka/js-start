"use strict"
const question = "Confirmez-vous d'être majeur ?"
const answer = confirm(question)
let message
if (answer) {
  message = "Bienvenue !"
} else {
  message = "Vous n'être pas autorisé !"
}

/* on aurait pu utiliser l'opérateur conditionnel (ternary operator)

let message = answer ? "Bienvenue !" : "Vous n'être pas autorisé !"

*/
alert(message)
