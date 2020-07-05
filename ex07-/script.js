"use strict"
const question = "Quel est le nom de ton école ?"
let answer
// pose la question jusqu'au moment ou l'utilisateur entre Alyra
do {
  answer = prompt(question)
} while (answer !== "Alyra")

alert("Yay!!!")
