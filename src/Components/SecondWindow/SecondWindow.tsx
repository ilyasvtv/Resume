import Button from '@mui/joy/Button';
import Experience from "./Experience";
import LastJobs from "./LastJobs";
import store from "../../store/store"

const SecondWindow = () => {
    return (
        <form className="form" onSubmit={(e) => store.onSubmit(e)}>
            <Experience />
            <LastJobs />
            <Button className="step-btn" type="submit">Next step</Button>
            <Button type="button" onClick={() => store.returnToLastPage()}>Previous step</Button>
        </form>
  );
}

export default SecondWindow;
