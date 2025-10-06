import { useState } from 'react';

// props = { user : { "username" : "Cosme Fulanito", "avatar_url" : "https://i.pravatar.cc/80?img=13" } }

export default function CardItem(props) {
    let avatar;

    if (props.user.avatar_url) {
        avatar = <img src={props.user.avatar_url} alt="Avatar" className="img-fluid rounded-circle" />
    } else {
        let [ nombre, apellido ] = props.user.username.split(' ')
        avatar = `${nombre[0]}${apellido[0]}`;
    }

    // desestructuramos el resultado par obtener el valor de lectura y la funcion de escritura
    const [isOnline, setIsOnline] = useState(props.user.online); // Observable

    let online = isOnline 
        ? <i className="bi bi-wifi text-success me-3"></i> 
        : <i className="bi bi-wifi-off text-secondary me-3"></i>

    const switchConnectionStatus = () => {
        setIsOnline(!isOnline)
    }

    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    { avatar }
                    <h5 className="card-title">
                        { online }
                        { props.user.username }
                    </h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button onClick={switchConnectionStatus} className="btn btn-primary">
                        <i className="bi bi-person-fill-slash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
