import { sum, sum_odds, product } from './operacoes.js';

const vetor1 = [1, 2, 3];
const vetor2 = [2, 2, 2];
const vetor3 = [1, 2, 3, 4, 5, 6];

console.log("sum(vetor1):", sum(vetor1));
console.log("sum_odds(vetor1):", sum_odds(vetor1));
console.log("product(vetor1):", product(vetor1));

console.log("sum(vetor2):", sum(vetor2));
console.log("sum_odds(vetor2):", sum_odds(vetor2));
console.log("product(vetor2):", product(vetor2));

console.log("sum(vetor3):", sum(vetor3));
console.log("sum_odds(vetor3):", sum_odds(vetor3));
console.log("product(vetor3):", product(vetor3));