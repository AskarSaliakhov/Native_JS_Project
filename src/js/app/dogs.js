import {URL_DOGS} from '../../consts/consts'
import {watchCurrentPicture} from '../watchers'
import {loadingLoader, removeLoader} from './loaderApp'

const allDogs = () => {
	const currentPicture = {
		currentPicture: null,
	}
	const buttonChangeDog = document.querySelector('.btn__change__photo')
	buttonChangeDog.addEventListener('click', async function () {
		try {
			loadingLoader()
			const response = await fetch(URL_DOGS)
			const responseData = await response.json()
			currentPicture.currentPicture = responseData.message
		} catch (error) {
			alert(error)
		} finally {
			removeLoader()
		}
	})
	watchCurrentPicture(currentPicture)
}
export default allDogs
