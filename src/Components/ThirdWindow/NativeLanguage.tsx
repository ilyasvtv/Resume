import Input from '@mui/joy/Input';
import InputLabel from '@mui/material/InputLabel';
import { observer } from "mobx-react-lite";
import store from "../../store/store";

const NativeLanguage = () => {
    return (
        <>
            <InputLabel>{store.native_language[0]["name"]}</InputLabel>
            <Input 
                placeholder="Input here"
                name={store.native_language[0]["name"]}
                value={store.native_language[0]["value"]}
                required={store.native_language[0]["required"]}
                type={store.native_language[0]["type"]}
                variant="outlined"
                onChange={(e) => store.onChange(e, "native_language")}
            />
        </>
    )
}

export default observer(NativeLanguage);