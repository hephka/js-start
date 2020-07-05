"use strict"
const question = "Quel âge as tu ?"
let age
let message
do {
  age = prompt(question)
} while (isNaN(age))
// pose la question jusqu'au moment ou l'utilisateur entre la valeur numérique
// affiche le message "Merci, nous avons noté que tu as .. ans.
message = `Merci, nous avons noté que tu as ${age} ans`
alert(message)
