import { TriangleChecker } from "./triangle-checker-function.js";

console.log(TriangleChecker(3, 4, 5)); // Escaleno
console.log(TriangleChecker(3, 3, 3)); // Equilateral
console.log(TriangleChecker(3, 3, 5)); // Isosceles
console.log(TriangleChecker(1, 2, 3)); // none
console.log(TriangleChecker(1, 1, 2)); // none