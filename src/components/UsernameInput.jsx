import { useState } from 'react';

export default function UsernameInput() {
    const [ isValid, setIsValid ] = useState(false);

    const [ hasMinChars, setHasMinChars ] = useState(false);
    const [ hasMaxChars, setHasMaxChars ] = useState(false);
    const [ hasOnlyAlpha, setHasOnlyAlpha ] = useState(false);

    function handleInput(event) {
        let value = event.target.value;

        setHasMinChars(value.length >= 6);
        setHasMaxChars(value.length <= 9);
        setHasOnlyAlpha(/^[a-zA-Z]{1,}$/.test(value));

        // el problema se "refleja" a partir de aca
        // pista: asincronismo
        setIsValid( hasMinChars && hasMaxChars && hasOnlyAlpha )
    }

    return (
        <div className="form-group">
            <label>Nombre</label>
            
            { hasOnlyAlpha ? '' : <div className="text-danger">Ingresa solo letras</div> } 
            { hasMinChars ? '' : <div className="text-danger">El minimo son 6 caracteres</div> } 
            { hasMaxChars ? '' : <div className="text-danger">El maximo son 9 caracteres</div> } 

            <input 
                onInput={handleInput} 
                type="text" 
                name="username" 
                className={ `form-control border-${isValid ? 'success' : 'danger'}` } 
            />
        </div> 
    )
}