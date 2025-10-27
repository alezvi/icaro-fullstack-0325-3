import { Link } from 'react-router-dom';

export default function LobbyPage() 
{
    function exit() {
        window.close();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Bienvenido al juego!</h1>

                    <Link className="btn btn-success" to="/board">Entrar</Link>
                    <Link to="/rules">Reglamento</Link>
                    <Link to="/settings">Personalizar</Link>

                    <br/>
                    <button onClick={exit}>Salir</button>
                </div>
            </div>
        </div>
    )
}
