const initLoader = () => {
	const mask=document.querySelector('.mask')
	mask.style.display='none'
	const divLoader = document.createElement('div');
	divLoader.className = 'loader';
	mask.append(divLoader);
}
export default initLoader;

