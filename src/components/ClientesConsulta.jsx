import React, { useState } from 'react';

function ClientesConsulta(props){
    const [ json, setJson ] = useState()
    // const [ clienteJson, setClienteJson ] = useState({id: 0})
    const [ clienteJson, setClienteJson ] = useState({})
    // const [ altaCliente, setAltaCliente ] = useState("N")
    // const [ jsondb, setJsondb ] = useState(props.onhandleJson)
    const [ inputclient, setInputClient ] = useState("")
    // const [ data, setData ] = useState([])

    // const handleChangeCliente = (e) =>{
    //     const cliente = e.target.value.toUpperCase()
    //     setInputClient(cliente)
    //     //this.GetClientsData()

    //     if (cliente.length) {
    //         setJson( jsondb.filter(item => (item.id + item.name + item.tel).includes(cliente) ))
    //     }else{
    //         setJson([])
    //     }
    // }

    // useEffect(()=>{
    //         fetch('http://localhost:4100')
    //         .then(response => response.text())
    //         .then(json => console.log(json))
    // },[])


    // useEffect(() => {
    //     const fetchData = async () => {
    //     //   const response = await fetch(`https://swapi.dev/api/people/1/`);
    //     //   const response = await fetch(`https://swapi.dev/api/people`);
    //       const response = await fetch('http://localhost:4100')
    //       const newData = await response.json();
    //     //   console.log(newData.results)
    //       console.log(newData)
    //     //   setData(newData)
    //       setJson(newData)
    //     };
      
    //     fetchData();
    //   }, [inputclient]);



    const quitarAcentos = (cadena)=>{
        const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U','ñ':'n','Ñ':'N'};
        return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
    }
    

    const handleClick = (event) => {
        const cliente = quitarAcentos(event.target.value.toUpperCase())
        setInputClient(cliente)
        if(cliente){
            fetch(`http://localhost:4100/${cliente}`)
            .then((response) => response.json())
            .then((json) => setJson(json))
            .catch((error) => console.log(error))
        }else{
            setJson(null)
        }
    }
      

    return (
      <React.Fragment>
        <form onSubmit={e => e.preventDefault()}>
          <h5>Clientes</h5>
          <input
            type="text"
            value={inputclient}
            placeholder="Nombre del Cliente"
            size="55"
            onChange={handleClick}
            style={{ textTransform: "uppercase" }}
          />
          <button
            onClick={() => {
              props.onAltaCliente("S");
            }}
          >
            Alta Cliente
          </button>
          <table>
            <thead>
              {/* <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Tel</th>
            </tr> */}
            </thead>
            <tbody>
              {json
                ? json.map((item, index) => (
                    <tr
                      key={index}
                      onClick={() => {
                        setClienteJson({
                          id: item.id,
                          name: item.name,
                          lastname: item.lastname,
                          tel: item.tel,
                        });
                        props.onChangeCliente({
                          id: item.id,
                          name: item.name,
                          lastname: item.lastname,
                          tel: item.tel,
                        });
                      }}
                    >
                      {/* <td style={{ padding: "0 10px" }}>{item.id} {item.name} {item.lastname} {item.tel}</td> */}
                      <td style={{ padding: "0 10px" }}>{item.id} </td>
                      <td style={{ padding: "0 10px" }}>
                        {item.name} {item.lastname}
                      </td>
                      <td style={{ padding: "0 10px" }}>{item.tel}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>

          {/* <ul style={{listStyleType:"none"}}>
            {json ?
                json.map((item, index) =>(
                    <li key={index} onClick={()=> alert(item.id)}>{item.id} {item.name} {item.lastname} {item.tel}</li>
                    ))
                    : null
                }
            </ul> */}
        </form>
      </React.Fragment>
    );
}
export default ClientesConsulta;