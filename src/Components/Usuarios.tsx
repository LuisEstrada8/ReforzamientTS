import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {

    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

    const renderItem= (usuario: Usuario)=>{
        return (
            <tr key={usuario.id.toString()}>
            <td><img src={usuario.avatar} className="rounded-circle img-fluid" alt={usuario.first_name} width="60px"/></td>
            <td>{usuario.first_name}{usuario.last_name}</td>
            <td>{usuario.email}</td>
            </tr>
        )
}

    return (
        <>
            <h2>Usuarios</h2>

        <table className="table text-center ">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Nombre</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map( renderItem )}
            </tbody>
        </table>

        <button className="btn btn-success" onClick={paginaAnterior}>Anteriores</button>
        <button className="btn btn-success" onClick={paginaSiguiente}>Siguientes</button>


        </>
    )
}
