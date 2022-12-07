import MyImage from './img/Q3.png'
import React from 'react';

export const Question1 =  [
    {
        questionText: 'In a regular expression what does the * indicate?',
        answerOptions: [
            { answerText: 'the beginning of the line', isCorrect: false },
            { answerText: 'at most one time', isCorrect: false },
            { answerText: 'zero or more times', isCorrect: true },
            { answerText: 'any character', isCorrect: false },
        ],
    },
    {
        questionText: 'In a regular expression what does the | indicate',
        answerOptions: [
            { answerText: 'and', isCorrect: false },
            { answerText: 'or', isCorrect: true },
            { answerText: 'exclusive or', isCorrect: false },
            { answerText: 'nor', isCorrect: false },
        ],
    },
    {
        questionText: 'In a regular expression what does the + indicate?',
        answerOptions: [
            { answerText: 'one or more times', isCorrect: true },
            { answerText: 'at most one time', isCorrect: false },
            { answerText: 'zero or more times', isCorrect: false },
            { answerText: 'one or none', isCorrect: false },
        ],
    },
    {
        questionText: 'What will be printed after running main() when it uses static scoping?',
        img:<img src={MyImage}/>,
        answerOptions: [
            { answerText: '113', isCorrect: false },
            { answerText: '213', isCorrect: false },
            { answerText: '321', isCorrect: true },
            { answerText: '123', isCorrect: false },
        ],
        
    },
    {
        questionText: 'What will be printed after running this code: (+ 2 1)?',
        answerOptions: [
            { answerText: '2', isCorrect: false },
            { answerText: '3', isCorrect: true },
            { answerText: '1', isCorrect: false },
            { answerText: '0', isCorrect: false },
        ],
        
    },

    {
        questionText: 'Which of these is not a functional programming language?',
        answerOptions: [
            { answerText: 'Scheme', isCorrect: false },
            { answerText: 'Haskell', isCorrect: false },
            { answerText: 'Java', isCorrect: true },
            { answerText: 'Prolog', isCorrect: false },
        ],
    },
    {
        questionText: "What's the purpose of learning lambda calculus?",
        answerOptions: [
            { answerText: 'captures the essence of object oriented programming', isCorrect: false },
            { answerText: 'good for long-running workloads and complex functions', isCorrect: false },
            { answerText: 'captures some of the essential, common features of a wide variety of programming languages', isCorrect: true },
            { answerText: 'because it helps you understand the underlying concept of all programming lanugages', isCorrect: false },
        ],
    }, 
    {
        questionText: 'What are the pros of learning Scheme?',
        answerOptions: [
            { answerText: 'Ability to do low-level operations', isCorrect: false },
            { answerText: 'Simple syntax', isCorrect: true },
            { answerText: 'Has run-time type checking', isCorrect: false },
            { answerText: 'Dynamic variable scoping', isCorrect: false },
        ],
    },
    {
        questionText: 'What is a functional programming language?',
        answerOptions: [
            { answerText: 'A form of programming that attempts to avoid changing state and mutable data', isCorrect: true },
            { answerText: 'A form of programming that attempts to change data and mutable data', isCorrect: false },
            { answerText: 'A form of programming that attempts to change state and immutable data', isCorrect: false },
            { answerText: 'A form of programming that attempts to avoid changing state and immutable data', isCorrect: false },
        ],
    },
    {
        questionText: 'What type of language is prolog?',
        answerOptions: [
            { answerText: 'function based', isCorrect: false },
            { answerText: 'objected based', isCorrect: false },
            { answerText: 'script', isCorrect: false },
            { answerText: 'logic based', isCorrect: true },
        ],
    },


    {
        questionText: 'What does (λxyz .xyz )(λx .xx )(λx .x )x reduce to?',
        answerOptions: [
            { answerText: 'x', isCorrect: true },
            { answerText: 'y', isCorrect: false },
            { answerText: 'z', isCorrect: false },
            { answerText: 'xy', isCorrect: false },
        ],
    },
    {
        questionText: "What does ((λx.(x y))(λz.z)) reduce to?",
        answerOptions: [
            { answerText: 'x', isCorrect: false },
            { answerText: 'y', isCorrect: true },
            { answerText: 'z', isCorrect: false},
            { answerText: 'xy', isCorrect: false },
        ],
    }, 
    {
        questionText: 'What does ((λx.((λy.(x y))x))(λz.w)) reduce to?',
        answerOptions: [
            { answerText: 'yz', isCorrect: false },
            { answerText: 'xy', isCorrect: false },
            { answerText: 'z', isCorrect: true },
            { answerText: 'x', isCorrect: false },
        ],
    },
    {
        questionText: "What does ((λf.((λg.((f f)g))(λh.(k h))))(λx.(λy.y))) reduce to?",
        answerOptions: [
            { answerText: '(λf.(kf))', isCorrect: false },
            { answerText: '(λg.(kg))', isCorrect: false },
            { answerText: '(λh.(kh))', isCorrect: true },
            { answerText: '(λk.k)', isCorrect: false },
        ],
    }, 
    {
        questionText: 'does (λg.((λf.((λx.(f (x x)))(λx.(f (x x))))) g)) reduce?',
        answerOptions: [
            { answerText: 'yes to (λg.g)', isCorrect: false },
            { answerText: 'yes to (λx.x)', isCorrect: false },
            { answerText: 'yes to (λf.f)', isCorrect: false },
            { answerText: 'no', isCorrect: true },
        ],
    },
	];

 