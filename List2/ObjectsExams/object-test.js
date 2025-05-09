import { Exam } from './exam.js';

const questoes = [
    { numero: 1, peso: 2, resposta: 'a' },
    { numero: 2, peso: 2, resposta: 'b' },
    { numero: 3, peso: 2, resposta: 'a' },
    { numero: 4, peso: 2, resposta: 'c' },
    { numero: 5, peso: 2, resposta: 'd' },
];

const respostasAluno = ['a', 'b', 'b', 'b', 'b'];

const prova = new Exam(questoes);

const nota = prova.grade(respostasAluno);
console.log("Nota do aluno:", nota);