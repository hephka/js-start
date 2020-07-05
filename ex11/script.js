// activer le mode script
/* afficher dans la console :

*
**
***
****
*****
******
*******
********
*********
**********

*/

"use strict"
const num = 10
let line = "#"

while (line.length <= num) {
  console.log(line)
  line += "#"
}

/*
let line = ''

while (line.length < num) {
  line += "#"
  console.log(line)
}
*/
