import { useState } from 'react';
import UsernameInput from './UsernameInput.jsx';

export default function ParticipantsForm () {
    const [ displayForm, setDisplayForm ] = useState(true);

    function changeDisplayForm() {
        setDisplayForm(!displayForm); 
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.username.value);
    }

    return (
        <div className="row">
            <div className="col">
                <div className="my-3">
                    <button onClick={changeDisplayForm} className="btn btn-primary">Agregar participante</button>
                </div>

                <form onSubmit={handleSubmit} className={ displayForm ? '' : 'd-none' }>
                    <UsernameInput />

                    <div className="form-group my-3">
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
