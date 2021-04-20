import {useRef, useState ,useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';
import { reqResApi } from '../api/apiReq';

export const useUsuarios = () => {
    const [usuarios, setusuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {


        cargarUsuarios();

    /*reqResApi.get<ReqResListado>('/users')
        .then(resp => {
            
            setusuarios(resp.data.data);
            
        })
        .catch(console.log);*/
    }, [])


    const cargarUsuarios = async() => {
        const resp = await reqResApi.get<ReqResListado>('/users',{
            params:{
                page: paginaRef.current,
            }
        })

        if (resp.data.data.length>0) {
            setusuarios(resp.data.data);
            
        }else{
            paginaRef.current--;
            alert('No hay mas')
        }

        setusuarios(resp.data.data);
        
    }

    const paginaAnterior=()=>{
        if (paginaRef.current>1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    const paginaSiguiente=()=>{
        paginaRef.current++;
        cargarUsuarios();
    }

    return{
        usuarios,
        paginaAnterior,
        paginaSiguiente,

    }

}
