import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/joy/Button';
import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import store from "../../store/store";

const Languages = () => {
    return (
        <>
		{store.languages.map((el, language_index) => {
		return el.map((el, index) => {
		    return <Fragment key={index}>
			<InputLabel>
			    {el["name"]}
			    {index === 0 && <span className="cross" onClick={() => store.deleteCategory("languages", language_index)}></span>}
			</InputLabel>
			<Input 
			    placeholder="Input here"
			    name={el["name"]}
			    value={el["value"]}
			    required={el["required"]}
			    type={el["type"]}
			    variant="outlined"
			    onChange={(e) => store.onChangeNested(e, "languages", language_index, index)}
			/>
		    </Fragment>       
		})
		})}
		<Button type="button" onClick={() => store.addLanguage()}>add language</Button>
        </>
    )
}

export default observer(Languages);
