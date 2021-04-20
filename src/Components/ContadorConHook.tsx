import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const {valor, acumular} = useCounter(0);

    return (
        <>
            <h3>Contador Con Hook: <small>{valor}</small></h3>
            
            <button className="btn btn-info text-white" onClick={()=>acumular(1)}>+</button>
            &nbsp;
            <button className="btn btn-danger" onClick={ ()=> acumular(-1)}>-</button>
        </>
    )
}
