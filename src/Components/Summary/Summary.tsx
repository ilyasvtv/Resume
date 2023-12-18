import store from "../../store/store";
import Button from '@mui/joy/Button';
import Photo from "./Photo";
import RestInfo from "./RestInfo";
import "./Summary.sass"

const Summary = () => {
    return (
        <div className="summary">
            <Photo />
            <RestInfo />
            <Button className="step-btn" type="button" onClick={() => store.returnToLastPage()}>Previous step</Button>
        </div>
    );
}

export default Summary;
