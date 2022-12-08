import React, { useState } from 'react';
import MyImage from "./img/Q3.png"
import { bank } from './questionList'
import Question from './components/question';

export default function App() {

	function reset() {
		setCurrentQuestion(0)
		setShowScore(false)
		setScore(0);
	}

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	//pass in question
	const questions = [
		<Question questionText={bank[0].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[1].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[2].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[3].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[4].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[5].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[6].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[7].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[8].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[9].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[10].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[11].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[12].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[13].questionText} answerOptions={bank[currentQuestion].answerOptions} />,
		<Question questionText={bank[14].questionText} answerOptions={bank[currentQuestion].answerOptions} />
	]


	questions.push(<Question questionText={bank[15].questionText} answerOptions={bank[currentQuestion].answerOptions} />)


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
				<>
					<div className='score-section'>
						<div className="restart">
							<text className="restart" >You scored {score} out of {questions.length}</text>
						</div>

						<div className="padder">
							<button className="spacer" onClick={() => reset()}> Try again? </button>
						</div>

					</div>

					<div>

					</div>

				</>
			) : (
				<>
			
					<div className='question-section'>


						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].props.questionText}</div>
						{/* <div>{questions[currentQuestion].props.img}</div> */}

						<div className='answer-section'>
							{questions[currentQuestion].props.answerOptions.map((answerOption) => (
								<div className='space'>
									<button className='answer-section' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
										{answerOption.answerText}
									</button>
								</div>
							))}

						</div>
					</div>



				</>
			)}
		</div>
	);
}
