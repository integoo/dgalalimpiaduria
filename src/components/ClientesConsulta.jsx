import React, { useState, useEffect } from 'react';

function ClientesConsulta(props){
    const [ json, setJson ] = useState([])
    const [ clienteJson, setClienteJson ] = useState({id: 0})
    // const [ clienteJson, setClienteJson ] = useState({})
    const [ altaCliente, setAltaCliente ] = useState("N")
    const [ jsondb, setJsondb ] = useState(props.onhandleJson)

    const handleChangeCliente = (e) =>{
        const cliente = e.target.value.toUpperCase()
        if (cliente.length) {
            setJson( jsondb.filter(item => (item.id + item.name + item.tel).includes(cliente) ))
        }else{
            setJson([])
        }
    }

    return (
      <React.Fragment>
        <h5>Clientes</h5>
        <input type="text" placeholder="Nombre del Cliente" size="55" onChange={handleChangeCliente} style={{ textTransform: "uppercase" }} />
        <button onClick={() => {setAltaCliente("S"); props.onAltaCliente("S")}}>Alta Cliente</button>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {json.map((item, index) => (
              <tr key={ index } onClick={()=>{
                    setClienteJson({
                        id: item.id,
                        name: item.name,
                        lastname: item.lastname,
                        tel: item.tel,
                      })
                      props.onChangeCliente({
                        id: item.id,
                        name: item.name,
                        lastname: item.lastname,
                        tel: item.tel,
                      })
              }} >
                <td style={{ padding: "0 10px" }}>{item.id} {item.name} {item.lastname} {item.tel}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* <ul>
            {json.map((item, index) =>(
                <li key={index} onClick={()=> alert(item.id)}>{item.id} {item.name} {item.tel}</li>
            ))}
        </ul> */}
      </React.Fragment>
    );
}
export default ClientesConsulta;