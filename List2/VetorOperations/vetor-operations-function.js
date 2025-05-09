export function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

export function sum_odds(arr) {
    return arr.filter(num => num % 2 !== 0)
              .reduce((total, num) => total + num, 0);
}

export function product(arr) {
    return arr.reduce((total, num) => total * num, 1);
}