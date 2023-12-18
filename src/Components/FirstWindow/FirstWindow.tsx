import Button from '@mui/joy/Button';
import Photo from "./Photo";
import MainInfo from "./MainInfo";
import store from "../../store/store";

const FirstWindow = () => {
	return (
		<form className="form" onSubmit={(e) => store.onSubmit(e)}>
			<Photo />
			<MainInfo />
			<Button className="step-btn" type="submit">Next step</Button>
		</form>
	);
}

export default FirstWindow;
