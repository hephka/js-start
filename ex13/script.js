"use strict"
// calculer la somme de 1 jusqua'a 10
/* let n
let total = 0
let step = 1

while (step <= n) {
  total += step
  step++
}
*/
function sumFrom1ToN(n) {
  let total = 0
  let step = 1

  while (step <= n) {
    total += step
    step++
  }
  return total
}

sumFrom1ToN(10)
alert(sumFrom1ToN(10))
