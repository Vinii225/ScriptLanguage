export class Exam {
    constructor(questions) {
        this.questions = questions;
    }

    grade(studentAnswers) {
        let total = 0;

        this.questions.forEach((question, index) => {
            const correct = question.resposta;
            const given = studentAnswers[index];

            if (correct === given) {
                total += question.peso;
            }
        });
        return total;
    }
}