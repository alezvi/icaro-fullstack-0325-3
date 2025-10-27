import useGame from './useGame.js';

const {items} = useGame();

// Items no puede estar vacio
console.assert( items.length > 0 );

// Items debe contener al menos 4 fichas
console.assert( items.length >= 4 );

// Items debe ser siempre par
console.assert( items.length % 2 === 0 );
