import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import { Fragment } from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const MainInfo = () => {
    return (
        <>
            {store.main_info.map((el, index) => {
				return <Fragment key={index}>
					<InputLabel>{el["name"]}</InputLabel>
					{(el["type"] === "textarea") ?
					<Textarea
						placeholder={el["name"]} 
						value={el["value"]}
						required={el["required"]}
						minRows={2}
						onChange={(e) => store.onChange(e, "main_info", index)}
					/> : (el["type"] === "option") ?
					<FormControl>
						<Select
							value={el["value"]}
							onChange={(e) => store.onChange(e, "main_info", index)}
							className="option"
						>
							<MenuItem value={"male"}>male</MenuItem>
							<MenuItem value={"female"}>female</MenuItem>
						</Select>
					</FormControl> :
					<Input
						placeholder="Input here"
						name={el["name"]}
						value={el["value"]}
						required={el["required"]}
						type={el["type"]}
						variant="outlined"
						onChange={(e) => store.onChange(e, "main_info", index)}
					/>
					}
				</Fragment>
			})}
        </>
    )
}

export default observer(MainInfo);