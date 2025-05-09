export function FibonacciSequence(n) {
    if (n < 0) {
        return "none";
    } else if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let sequence = new Array(n);
        sequence[0] = 0;
        sequence[1] = 1;
        for (let i = 2; i <= n; i++) {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
        return sequence;
    }
}