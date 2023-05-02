const initBtnsNextAndClose=()=>{
	const allModals=document.querySelectorAll('.modal');
	allModals.forEach((element)=>{
		const btnNext=document.createElement('button');
		btnNext.textContent='>';
		btnNext.className='btn__next';
		const btnClose=document.createElement('button');
		btnClose.textContent='X';
		btnClose.className='btn__close';
		element.append(btnNext,btnClose);
	})
}
export default initBtnsNextAndClose;
