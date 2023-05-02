const mask=document.querySelector('.mask')
export const loadingLoader = () => {
	mask.style.display='flex'
};
export const removeLoader = () => {
	mask.style.display='none'
};

