import { useForm } from '../hooks/useForm';

export const Formularios = () => {
    
    const {email,password, onChange, state} = useForm(
        {
            email:'test@test.com',
            password: '123456'
        }
    );
    return (
        <>
            <h2>Formularios</h2>

            <input type="Email" className="form-control" placeholder="Email" value={email} onChange={({target})=> onChange( target.value, 'email')}/>
            <input type="text" className="form-control" placeholder="Pass " value={password} onChange={({target})=> onChange( target.value, 'password')}/>
        
        <code>
            <pre>
                {JSON.stringify(state, null, 2)}
            </pre>
        </code>

        </>
    )
}
