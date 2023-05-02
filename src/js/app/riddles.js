import {watchQuestionAndAnswer} from '../watchers'
import {loadingLoader, removeLoader} from './loaderApp'
import {URL_RIDDLES} from '../../consts/consts'

const allRiddles=()=>{
	const questionAndAnswer = {
		question: '',
		answer: '',
	}
	const selectRiddles = document.querySelector('.select__riddles');

	const buttonShowAnswer = document.querySelector('.show__answer');

	selectRiddles.addEventListener('change', async function () {
		try {
			loadingLoader()
			const response = await fetch(URL_RIDDLES);
			const responseData = await response.json();
			questionAndAnswer.question = responseData[this.value].question;
			questionAndAnswer.answer = 'Нажмите на кнопку "Show Answer"';
			buttonShowAnswer.addEventListener('click', () => {
				questionAndAnswer.answer = responseData[this.value].answer;
				console.log(questionAndAnswer.answer);
				console.log(questionAndAnswer.question)
			});
		} catch (error) {
			alert(error);
		} finally {
			removeLoader()
		}
	});
	watchQuestionAndAnswer(questionAndAnswer)
}
export default allRiddles
