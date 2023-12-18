import Button from '@mui/joy/Button';
import Universities from "./Universities";
import Languages from "./Languages";
import NativeLanguage from "./NativeLanguage";
import Education from './Education';
import store from "../../store/store";

const ThirdWindow = () => {
    return (
        <form className="form" onSubmit={(e) => store.onSubmit(e)}>
            <Education />
            <NativeLanguage />
            <Languages />
            <Universities />
            <Button className="step-btn" type="submit">Next step</Button>
			<Button type="button" onClick={() => store.returnToLastPage()}>Previous step</Button>
        </form>
  );
}

export default ThirdWindow;
