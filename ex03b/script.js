/* refactor le code d'ex. 2 en introduisant 3ème variable jsAge
si ce n'était pas le cas utilise template litterals `... ${} ....`
*/
"use strict"
// déclare une variable message
let message
// déclare une variable age
let age
let jsAge = 25
// pose la question "Quel age as-tu ?" et affecte la réponse à la variable age
age = prompt("Quel age as-tu ?")
age = Number(age)
// affecte à la variable message le texte suivant "Tu as .. ans et JavaScript a 25 ans."
message = `Tu as ${age} ans et JavaScript a ${jsAge} ans.`
// affiche le message
alert(message)
// augement l'age de 1 et
age += 1
jsAge += 1
// change la valeur de message "L'année prochaine t'auras .. ans et JavaScript aura 26 ans."
message = `L'année prochaine t'auras ${age} ans et JavaScript aura ${jsAge} ans. `
// affiche le message
alert(message)
