import {watchDigits} from '../watchers'
import {loadingLoader, removeLoader} from './loaderApp'

const allDigits=()=>{
	const infoDigits = {
		infoDigits: ''
	}
	const input = document.querySelector('.input')
	const buttonGetInfo = document.querySelector('.btn__info__digits')

	buttonGetInfo.addEventListener('click', async function () {
		let inputDigit = input.value
		try {
			loadingLoader()
			const response = await fetch('http://numbersapi.com/' + inputDigit + '/?json')
			input.value = ""
			const responseData = await response.json()
			infoDigits.infoDigits = responseData.text
		} catch (error) {
			alert('Проверьте,что у вас целое число или строка не пустая')
		} finally {
			removeLoader()
		}
	})

	watchDigits(infoDigits)
}
export default allDigits
