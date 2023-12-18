import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const Experience = () => {
    return (
        <>
            <FormLabel id="demo-radio-buttons-group-label">Experience</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={store.work_experience[0]["value"]}
                onChange={(e) => {
                    store.onChange(e, "work_experience");
                    store.handleExperience();
                }}
            >
            <FormControlLabel value="unexperienced" control={<Radio />} label="unexperienced" />
            <FormControlLabel value="experienced" control={<Radio />} label="experienced" />
            </RadioGroup>
        </>
    )
}

export default observer(Experience);