export function TriangleChecker(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "none";
    } else {
        if (a===b && b===c)
            return "Equilateral";
        else if (a===b || b===c || a===c)
            return "Isosceles";
        else
            return "Escaleno";
    }
}