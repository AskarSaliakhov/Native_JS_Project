import WatchJS from 'melanke-watchjs';

const { watch } = WatchJS;

export const watchWindow = (state) => {
	watch(state, 'currentWindow', () => {
		const modals = document.querySelectorAll('.modal');
		state.currentWindow.style.display = 'block';
		for (let i = 0; i < modals.length; i++) {
			if (modals[i] !== state.currentWindow) {
				modals[i].style.display = 'none';
			}
		}
	});
};
export const watchQuestionAndAnswer = (questionAndAnswer) => {
	watch(questionAndAnswer, 'answer', () => {
		document.querySelector('.QuestionH3').textContent = `Question: ${questionAndAnswer.question}`;
		document.querySelector('.AnswerH3').textContent = `Answer: ${questionAndAnswer.answer}`;
	});
};
export const watchCurrentPicture = (currentPicture) => {
	watch(currentPicture, 'currentPicture', () => {
		document.getElementById('imgDog').setAttribute('src', currentPicture.currentPicture);
	});
};

export const watchDigits=(infoDigits)=>{
	watch(infoDigits,'infoDigits',()=>{
		document.querySelector('.h3InfoDigit').textContent=infoDigits.infoDigits;
	})
}
