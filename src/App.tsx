import FirstWindow from './Components/FirstWindow/FirstWindow';
import SecondWindow from './Components/SecondWindow/SecondWindow';
import ThirdWindow from './Components/ThirdWindow/ThirdWindow';
import Summary from './Components/Summary/Summary';
import { observer } from 'mobx-react-lite';
import store from './store/store';
import './App.sass';

function App() {
  	return (
		<div className="App">
			{store.current_page === 0 && <FirstWindow />}
			{store.current_page === 1 && <SecondWindow />}
			{store.current_page === 2 && <ThirdWindow />}
			{store.current_page === 3 && <Summary />}
		</div>
  	);
}

export default observer(App);
