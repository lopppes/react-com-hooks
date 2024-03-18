import { useFormInput } from "../../hooks/useFormInput";

export default function Form(){

    const firstNameProps = useFormInput("Samuel")
    const lastNameProps = useFormInput("Lopes")
   
    return(
        <>
        <label>
            Primeiro Nome:
            <input {...firstNameProps} />
        </label>
        <label>
            Segundo Nome:
            <input {...lastNameProps} />
        </label>

        <p><b>Bem vindo(a), {firstNameProps.value} {lastNameProps.value}</b></p>
        </>
    )
}