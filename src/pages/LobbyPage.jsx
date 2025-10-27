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

                    <div className="row">
                        <div className="col-12">
                            <Link className="btn w-100 btn-success" to="/board" style={{height: '50vh'}}>
                                Entrar
                            </Link>
                        </div>
                        <div className="col-6 py-5">
                            <Link class="text-decoration-none" to="/settings">Personalizar</Link>
                        </div>
                        <div className="col-6 py-5">
                            <Link class="text-decoration-none" to="/rules">Reglamento</Link>
                        </div>
                        <div className="col-6 py-5">
                            <button class="border-0 bg-white text-muted" onClick={exit}>Salir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
