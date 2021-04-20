
export const TiposBasicos = () => {
    
    //let nombre : string | number = 'fernando';
    const nombre : string  = 'fernando';
    const edad : number = 35;
    const estaActivo : boolean = true;
    const poderes : string[] = ['velocidad',' volar',' Respirar en el agua'];
    
    poderes.push('fuerza');

    return (
        <>
          <h3>Tipos basicos</h3>
          {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
          <br/>
          {poderes.join(',')}
        </>
    )
}
