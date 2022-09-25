import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);

    return (
        <>
        <button onClick={() => setContador(contador + 1)} id='boton1' className='btn btn-dark'>Click Me</button>
            <h1>{contador}</h1>
            <button id='boton' className='btn btn-light'>Restar</button>
        </>
    );
}

export default Contador;
