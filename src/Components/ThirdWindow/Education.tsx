import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const Education = () => {
    return (
        <>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Education</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={store.degree[0]["value"]}
                    label="Education"
                    onChange={(e) => store.onChange(e, "degree")}
                    className="option"
                >
                    <MenuItem value={"middle"}>middle</MenuItem>
                    <MenuItem value={"middle+"}>middle+</MenuItem>
                    <MenuItem value={"high"}>high</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default observer(Education);