import React, { useState } from 'react';

function ClienteSeleccionado(props){
    const [ clienteJson, setClienteJson ] = useState(props.onClienteJson)
    return(
        <React.Fragment>
            <form onSubmit={e=> e.preventDefault()}>
                ClienteId
                <input type="text" name="" id="" size="8" style={{textAlign:"right"}} value={clienteJson.id} readOnly={true} />
                <br />
                Nombre Cliente
                <input type="text" name="" id="" size="60" value={clienteJson.name+" "+clienteJson.lastname} readOnly={true} />
                <br />
                Teléfono Cliente
                <input type="text" name="" id="" value={clienteJson.tel} readOnly={true} />
            </form>
        </React.Fragment>
    )
}
export default ClienteSeleccionado;