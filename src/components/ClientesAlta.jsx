import React, { useState } from 'react';

function ClientesAlta(props){
    const [ clienteId, setClienteId] = useState(0)
    const [ clienteName, setClienteName ] = useState("")
    const [ clienteApellidos, setClienteApellidos ] = useState("")
    const [ telCliente, setTelCliente ] = useState("")
    return(
        <React.Fragment>
            <form onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder='Id Cliente' size="8" value={clienteId} onChange={(event)=> setClienteId(event.target.value)} style={{textAlign:"right"}} readOnly={true} />
                <br />
                <input type="text" placeholder='Nombres Cliente' size="40" onChange={(event)=> setClienteName(event.target.value)} />
                <br />
                <input type="text" placeholder='Apellidos Cliente' size="40" onChange={(event)=> setClienteApellidos(event.target.value)} />
                <br />
                <input type="tel" placeholder='Tel Cliente' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange={(event)=> setTelCliente(event.target.value)} />
                <br />
                <button style={{margin:"10px"}} onClick={()=>{props.onChangeAlta({
                    id: clienteId,
                    name: clienteName+" "+clienteApellidos,
                    tel: telCliente
                })}}>Grabar Cliente</button>
            </form>
        </React.Fragment>
    )
}
export default ClientesAlta;