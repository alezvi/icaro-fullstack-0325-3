export default function Display(props) {
    return (
        <div className="row my-3">
            <div className="col-6">Puntaje: {props.score}</div>
            <div className="col-6">Tiempo: {props.seconds}</div>
        </div>
    )
}
