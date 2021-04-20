import { type } from 'node:os';
import {useReducer} from 'react'
import {useEffect} from 'react'

interface AuthState{
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string,
}

const initialState: AuthState={
    validando:true,
    token: null,
    username: '',
    nombre: '',
}

type LoginPayload ={
    usarname: string,
    nombre: string,
}

type AuthAction = 
|{type:'logout'}
|{type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                nombre: '',
                username: '',
            }
            break;
            
            case 'login':
            return{
                validando: false,
                token: 'ABC123',
                nombre: action.payload.nombre,
                username: action.payload.usarname,
            }

        default:
            return state;
    }
}

export const Login = () => {

    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(()=>{
            dispatch({type: 'logout'})
        }, 1500);
    }, [])

    const login = ()=> {
        dispatch ({type: 'login', payload: {nombre: 'Fernando', usarname: 'Herrea'}})
    }

    const logout = ()=> {
        dispatch ({type: 'logout'})
    }

    if (validando) {
        return (
           <>
           <div className="alert alert-info">Validando...</div>
           </>
        )
    }

    return (
        <>
           <h3>Login</h3> 

            {
                (token)
                ?<div className="alert alert-success">Validado como: {nombre}</div>
                :<div className="alert alert-danger">No validado</div> 
            }

            {
                (token)
                ? <button className="btn btn-danger" onClick={logout}>Logout</button>
                : <button className="btn btn-success" onClick={login}>Login</button>
            }
           

           
           
        </>
    )
}
