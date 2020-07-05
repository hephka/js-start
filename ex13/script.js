"use strict"
// calculer la somme de 1 jusqua'a 10
let n = 10
let total = 0

let step = 1
while (step <= n) {
  total += step
  step++
}

/*
let step = 0
while (step < n) {
  step++
  total += step
  
}
*/

console.log(total)
