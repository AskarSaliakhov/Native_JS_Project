const initBreakingBad=()=>{
	const main=document.querySelector('.main');
	const mainButtons=document.querySelector('.main__buttons');
	const buttonDogs=document.createElement('button');
	buttonDogs.classList.add('button__main','btnChangeDog');
	buttonDogs.textContent='Собаки';
	mainButtons.append(buttonDogs);


	const buttonChangePhoto=document.createElement('button');
	buttonChangePhoto.className='btn__change__photo';
	buttonChangePhoto.textContent='Поменять фото собаки';
	const h3Dogs=document.createElement('h3')
	h3Dogs.className='h3Dogs'
	h3Dogs.textContent='Собаки'

	const modalDogs = document.createElement('div');
	modalDogs.classList.add('modal', 'Dogs');
	modalDogs.dataset.type = 'Dogs';
	modalDogs.style.display = 'none';
	main.append(modalDogs);

	let imgDog=document.createElement('img');
	imgDog.setAttribute('src','https://images.dog.ceo/breeds/buhund-norwegian/hakon1.jpg');
	imgDog.id='imgDog';
	modalDogs.append(imgDog,buttonChangePhoto,h3Dogs);


}
export default initBreakingBad;
