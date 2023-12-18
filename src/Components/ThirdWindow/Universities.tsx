import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/joy/Button';
import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import store from "../../store/store";

const Universities = () => {
    return (
        <>
            {store.universities.map((el, university_index) => {
                return el.map((el, index) => {
                    return <Fragment key={index}>
                        <InputLabel>
                            {el["name"]}
                            {index === 0 && <span className="cross" onClick={() =>  store.deleteCategory("universities", university_index)}></span>}
                        </InputLabel>
                        <Input
                            placeholder="Input here"
                            name={el["name"]}
                            value={el["value"]}
                            required={el["required"]}
                            type={el["type"]}
                            variant="outlined"
                            onChange={(e) => store.onChangeNested(e, "universities", university_index, index)}
                        />
                    </Fragment>        
                })
            })}
            <Button type="button" onClick={() => store.addUniversity()}>add university</Button>
        </>
    )
}

export default observer(Universities);