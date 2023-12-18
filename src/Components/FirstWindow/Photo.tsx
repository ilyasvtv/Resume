import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const Photo = () => {
    return (
        <>
            	<InputLabel>{store.photo[0]["name"]}</InputLabel>
		{store.photo[0]["value"].length > 0 && <img width={100} height={100} src={store.photo[0]["value"]} alt="img" />}
		<Input
			placeholder="Input here"
			name={store.photo[0]["name"]}
			required={store.photo[0]["required"]}
			type={store.photo[0]["type"]}
			variant="outlined"
			onChange={(e) => store.processFile(e)}
		/>
        </>
    )
}

export default observer(Photo);
