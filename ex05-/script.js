"use strict"
const question = "De quelle année date ECMA6 (ECMAScript-2015) ?"
const answer = prompt(question)
let message
if (answer == 2015) {
  message = "Bravo c'est une bonne réponse !"
} else {
  message = "Ce n'est pas une bonne réponse 🤔"
}
alert(message)
