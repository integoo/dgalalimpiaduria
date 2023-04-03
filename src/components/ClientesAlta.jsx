import React, { useState } from 'react';

function ClientesAlta(props){
    const [ clienteId, setClienteId] = useState(0)
    const [ clienteName, setClienteName ] = useState("")
    const [ clienteApellidos, setClienteApellidos ] = useState("")
    return(
        <React.Fragment>
            <input type="text" placeholder='Id Cliente' onChange={(event)=> setClienteId(event.target.value)} />
            <input type="text" placeholder='Nombres Cliente' onChange={(event)=> setClienteName(event.target.value)} />
            <input type="text" placeholder='Apellidos Cliente' onChange={(event)=> setClienteApellidos(event.target.value)} />
            <button onClick={()=>{props.onChangeAlta({
                id: clienteId,
                name: clienteName+" "+clienteApellidos,
                tel: 555555555
            })}}>Grabar Cliente</button>
        </React.Fragment>
    )
}
export default ClientesAlta;