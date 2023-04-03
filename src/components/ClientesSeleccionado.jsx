import React, { useState } from 'react';

function ClienteSeleccionado(props){
    const [ clienteJson, setClienteJson ] = useState(props.onClienteJson)
    return(
        <React.Fragment>
            ClienteId
            <input type="text" name="" id="" size="8" value={clienteJson.id} readOnly={true} />
            <br />
            Nombre Cliente
            <input type="text" name="" id="" size="60" value={clienteJson.name} readOnly={true} />
            <br />
            Teléfono Cliente
            <input type="text" name="" id="" value={clienteJson.tel} readOnly={true} />
        </React.Fragment>
    )
}
export default ClienteSeleccionado;