  // mets en place mode strict
"use strict"

  // déclare une variable greetings égale à 'Bonjour'
let greetings = `Bonjour`
console.log(greetings)

  // déclare la variable name et affecte la réponse à la question 'Comment tu t'appelles ?'
const question = `Comment tu t'appelles ?`
const name = prompt(question)
console.log(question)

  // déclare la variable message qui combine les variables greetings et name
greetings += ` ${name} !`
console.log(greetings)

  // affiche message
alert(greetings) 
