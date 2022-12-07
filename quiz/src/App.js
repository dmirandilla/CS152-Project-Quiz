import React, { useState } from 'react';
import MyImage from "./img/Q3.png"
import {Question1} from './questionList'

export default function App() {

	const questions = Question1

	function reset() {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0);
	}

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
					<div className="restart">
						<text className="restart" >You scored {score} out of {questions.length}</text>
						<button onClick={() => reset()}  className="restart"> Try again? </button>
					</div> 
					
				</div>
			) : (
				<>
					<div className='question-section'>
	
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
						<div>{questions[currentQuestion].img}</div>

						
							{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className='answer-section' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
								{answerOption.answerText}
							</button>
								))}
						
					</div>


				</>
			)}
		</div>
	);
}
