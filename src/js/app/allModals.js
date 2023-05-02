import {watchWindow} from '../watchers'
const allModalsApp=()=>{

	const state = {
		currentWindow: null,
	}
	const mainButtons = document.querySelectorAll('.button__main');
	const buttonNext=document.querySelectorAll('.btn__next');
	const buttonClose=document.querySelectorAll('.btn__close');

	for (let i = 0; i < mainButtons.length; i++) {
		mainButtons[i].addEventListener('click', () => {
			state.currentWindow = document.querySelectorAll('.modal')[i];
		});
	}

	buttonNext.forEach((element)=>{
		element.addEventListener('click',()=>{
			if (state.currentWindow === document.querySelectorAll('.modal')[2]) {
				state.currentWindow = document.querySelector('.modal');
			} else {
				state.currentWindow = state.currentWindow.nextSibling;
			}
		})
	})
	buttonClose.forEach((element)=>{
		element.addEventListener('click',()=>{
			state.currentWindow.style.display = 'none';
		})
	})
	watchWindow(state);
}
export default allModalsApp
