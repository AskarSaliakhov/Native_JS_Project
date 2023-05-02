const initRiddles=()=>{
	const main=document.querySelector('.main')
	const mainButtons=document.querySelector('.main__buttons')
	const buttonRiddles=document.createElement('button')
	buttonRiddles.classList.add('button__main')
	buttonRiddles.textContent='Загадки'
	mainButtons.append(buttonRiddles)

	const modalRiddles = document.createElement('div');
	modalRiddles.classList.add('modal', 'Riddles');
	modalRiddles.dataset.type = 'Riddles';
	modalRiddles.style.display = 'none';
	main.append(modalRiddles)


	const h3Question = document.createElement('h3');
	h3Question.textContent = 'Question: ';
	h3Question.className = 'QuestionH3';
	const h3Answer = document.createElement('h3');
	h3Answer.textContent = 'Answer: ';
	h3Answer.className = 'AnswerH3';
	const h3Riddles = document.createElement('h3');
	h3Riddles.className='h3Riddles'
	h3Riddles.textContent = 'Загадки';
	modalRiddles.append(h3Riddles);
	const showAnswer = document.createElement('button');
	showAnswer.textContent = 'Show Answer';
	showAnswer.className = 'show__answer';
	modalRiddles.append(showAnswer);
	modalRiddles.append(h3Question, h3Answer);
	const divClassSelectRiddles = document.createElement('div');
	divClassSelectRiddles.className = 'riddles__select';
	modalRiddles.append(divClassSelectRiddles);
	const selectRiddles = document.createElement('select');
	selectRiddles.className = 'select__riddles';
	divClassSelectRiddles.append(selectRiddles);

	const OPTIONS_RIDDLES = [
		'Question1', 'Question2', 'Question3',
	];
	OPTIONS_RIDDLES.forEach((option, index) => {
		const optionRiddles = document.createElement('option');
		optionRiddles.className = 'option__riddles';
		optionRiddles.textContent = option;
		optionRiddles.value = index;
		selectRiddles.append(optionRiddles);
	});
}
export default initRiddles;
