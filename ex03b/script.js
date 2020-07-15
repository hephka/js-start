/* refactor le code d'ex. 2 en introduisant 3ème variable jsAge
si ce n'était pas le cas utilise template litterals `... ${} ....`
*/

      // mets en place mode strict
      "use strict"

      // déclare la variable message
      // déclare la variable age
      // pose la question "Quel age as-tu ?" et affecte la réponse à la variable age
      let message = `Quel âge as-tu ?`
      let age = prompt(message)
      let ageJs = 25
      console.log(message)

      // affecte à la variable message le texte suivant "Tu as .. ans et JavaScript a 25 ans."
      message = `Tu as ${age} ans et JavaScript a ${ageJs} ans.`
      console.log(message)

      // affiche le message
      alert(message)

      // augemente l'age de 1
       ++age
       ++ageJs

      // change la valeur de message "L'année prochaine t'auras .. ans et JavaScript aura 26 ans."
      message = `L'année prochaine t'auras ${age} ans et JavaScript aura 26 ans.`
      console.log(message)

      // affiche le message
      alert(message)