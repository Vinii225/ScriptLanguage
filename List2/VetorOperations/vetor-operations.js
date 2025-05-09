class Answer {
    constructor(answer, studentAnswer, weight) {
        this.answer = answer;
        this.studentAnswer = studentAnswer;
        this.weight = weight;
    }

    getScore() {
        return this.answer === this.studentAnswer ? this.weight : 0;
    }
}

class Exam {
    constructor() {
        this.exams = [];
    }

    add(exam) {
        this.exams.push(exam);
    }

    avg() {
        const totalWeight = this.exams.reduce((acc, ex) => acc + ex.weight, 0);
        const score = this.exams.reduce((acc, ex) => acc + ex.getScore(), 0);
        return totalWeight === 0 ? 0 : (score / totalWeight) * 10;
    }

    min(count = 1) {
        const scores = this.exams.map(e => e.getScore()).sort((a, b) => a - b);
        return scores.slice(0, count);
    }

    max(count = 1) {
        const scores = this.exams.map(e => e.getScore()).sort((a, b) => b - a);
        return scores.slice(0, count);
    }

    lt(limit) {
        return this.exams.map(e => e.getScore()).filter(score => score < limit);
    }

    gt(limit) {
        return this.exams.map(e => e.getScore()).filter(score => score > limit);
    }
}

const prova = new Exam();

prova.add(new Answer('a', 'a', 2));
prova.add(new Answer('b', 'c', 2));
prova.add(new Answer('c', 'b', 2));
prova.add(new Answer('d', 'd', 2));
prova.add(new Answer('d', 'b', 2));

console.log("Nota final:", prova.avg().toFixed(1));
console.log("Menor nota(s):", prova.min());
console.log("Maior nota(s):", prova.max());
console.log("Notas < 2:", prova.lt(2));
console.log("Notas > 0:", prova.gt(0));