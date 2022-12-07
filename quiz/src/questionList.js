import MyImage from './img/Q3.png'
import Haskell from './img/Q13.png'
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
            { answerText: 'captures the essential and common features of a wide variety of programming languages', isCorrect: true },
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
            { answerText: 'object oriented', isCorrect: false },
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
        questionText: 'What is the output of the following code:  ',
        img: <img src={Haskell}/>,
        answerOptions: [
            { answerText: '[]', isCorrect: false },
            { answerText: '[1, 5, 6]', isCorrect: true },
            { answerText: '[4, 2, 1]', isCorrect: false },
            { answerText: '[6 , 5, 1]', isCorrect: false },
        ],
    },
    {
        questionText: "What does the :- symbol mean in Prolog?",
        answerOptions: [
            { answerText: 'used in rules to separate the head from the body', isCorrect: true },
            { answerText: 'serves to define the Type and Precedence of infix and postfix', isCorrect: false },
            { answerText: 'negation-as-failure, negation in Prolog', isCorrect: false },
            { answerText: 'used in functions to separate the head form the body', isCorrect: false },
        ],
    }, 
    {
        questionText: 'What is an atom in Prolog?',
        answerOptions: [
            { answerText: 'unbounded integers and rational numbers', isCorrect: false },
            { answerText: 'a unit composed a functor and a number of arguments', isCorrect: false },
            { answerText: 'are denoted by a string consisting of letters', isCorrect: false },
            { answerText: 'general-purpose name with no inherent meaning', isCorrect: true },
        ],
    },
	];

 