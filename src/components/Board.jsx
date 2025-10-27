import { useState } from 'react';
import Square from './Square.jsx';
import Display from './Display.jsx';
// import useGame from './../hooks/useGame.jsx';
import useGameStore from './../store/useGameStore.jsx';

export default function Board() {
    // const { items, started, score, seconds, handleStart } = useGame()
    const { items, started, score, seconds, start } = useGameStore();

    return (
        <>
            <div className="row my-3">
                <div className="col-6">
                    <button className="btn btn-success" onClick={start}>Iniciar</button>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </div>

            <Display score={score} seconds={seconds} />

            <div className="row my-3">
                {items.map((item, key) => <Square item={item} key={key} />)}
            </div>
        </>
    );
}