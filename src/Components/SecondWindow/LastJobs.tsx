import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/joy/Button';
import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import store from "../../store/store";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const LastJobs = () => {
    return (
        <>
            {store.last_jobs.map((el, job_index) => {
                return el.map((el, index) => {
                    return <Fragment key={index}>
                        <InputLabel className="label-input">
                            {el["name"]}
                            {index === 0 && <span className="cross" onClick={() => store.deleteCategory("last_jobs", job_index)}></span>}
                        </InputLabel>
                        {el["name"] === "End of job" && 
                            <FormGroup>
                                <FormControlLabel 
                                    onChange={(e) => store.handleCurrentWork(e as any, job_index, index)} 
                                    value={true} 
                                    checked={el["value"] === "current work" ? true : false} 
                                    control={<Checkbox />} 
                                    label="Current work" 
                                />
                            </FormGroup>
                        }
                        <Input
                            placeholder="Input here"
                            name={el["name"]}
                            value={el["value"] === "current work" ? "" : el["value"]}
                            required={el["required"]}
                            type={el["type"]}
                            variant="outlined"
                            disabled={el["value"] === "current work" ? true : false}
                            onChange={(e) => store.onChangeNested(e, "last_jobs", job_index, index)}
                        />
                    </Fragment>
                })
            })}
            {store.work_experience[0]["value"] === "experienced" && <Button type="button" onClick={() => store.addJob()}>add job</Button>}
        </>
    )
}

export default observer(LastJobs);