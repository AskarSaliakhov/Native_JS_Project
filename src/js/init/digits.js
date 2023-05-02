const initDigits = () => {
	const main = document.querySelector('.main');
	const mainButtons = document.querySelector('.main__buttons');
	const buttonDigits = document.createElement('button');
	buttonDigits.classList.add('button__main','button__digits');
	buttonDigits.textContent = 'Числа';
	mainButtons.append(buttonDigits);

	const modalDigits = document.createElement('div');
	modalDigits.classList.add('modal', 'Digits');
	modalDigits.dataset.type = 'Digits';
	modalDigits.style.display = 'none';
	main.append(modalDigits);

	const input=document.createElement('input');
	input.className='input';
	input.placeholder='Введите именно число';

	let h3InfoDigit=document.createElement('h3');
	h3InfoDigit.className='h3InfoDigit';
	h3InfoDigit.textContent='Получить информацию о целом числе';


	const buttonGetInfoDigits=document.createElement('button');
	buttonGetInfoDigits.className='btn__info__digits';
	buttonGetInfoDigits.textContent='Получить информацию о числе';

	modalDigits.append(input,h3InfoDigit,buttonGetInfoDigits);

}
export default initDigits;
