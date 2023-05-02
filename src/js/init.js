import initBreakingBad from './init/dogs';
import initDigits from './init/digits';
import initRiddles from './init/riddles';
import initLoader from './init/loader';
import btnsNextAndClose from './init/btnsNextAndClose';

const init = () => {
	initLoader();
	initBreakingBad();
	initDigits();
	initRiddles();
	btnsNextAndClose();
}
export default init;
