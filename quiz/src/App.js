import React, { useState } from 'react';
import MyImage from "./img/Q3.png"

export default function App() {
	const questions = [
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
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div>{questions[currentQuestion].img}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
