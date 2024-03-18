import {useState} from 'react'

export function useFormInput(initialValue){
    const [value, setvalue] = useState(initialValue)

    function handleChange(e){
   setvalue(e.target.value);
    }
    const inputProps = {
        value: value,
        onChange: handleChange,
    };
    return inputProps;
}