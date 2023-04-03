import React, { useState } from 'react';
import './Notas.css'
import ClientesConsulta from './components/ClientesConsulta'
import ClienteSeleccionado from './components/ClientesSeleccionado';
import ClientesAlta from './components/ClientesAlta';

function Notas(){
    const [ clienteJson, setClienteJson ] = useState({id: 0})
    const [ altaCliente, setAltaCliente ] = useState("N")
    const [ arraydb, setArraydb ] = useState([
        {id: "1", name:"JESUS EZEQUIEL", lastname:"UGALDE LOPEZ",tel:"664 599 02 40"}
    ])


        return(
            <div className="notascn">
                <h3>REGISTRO DE NOTAS</h3>
                <br />
                <b>Sucursal</b>
                <input type="text" value="01 San Pedro" readOnly={true} />
                <b>Folio</b>
                <input type="text" value="1" readOnly={true} />
                <b>Fecha</b>
                <input type="text" value="Mar/19/2023" readOnly={true}/>
                <div className="clientescn">
                    <div className="generalescn">
                        {/*Consulta Clientes */}
                        {/* { altaCliente === "N" && clienteJson.id === 0 ?  */}
                        { altaCliente === "N" &&  clienteJson.id === 0 ? 
                           <ClientesConsulta onChangeCliente={(clienteJson)=> setClienteJson(clienteJson)} onAltaCliente={(altaCliente)=>setAltaCliente(altaCliente)} onhandleJson={arraydb}/>
                        :
                            null 
                        }


                        { clienteJson.id !== 0 ? 
                               <ClienteSeleccionado onClienteJson={clienteJson} />
                        :
                            null
                        }

                        
                        { altaCliente === "S" && clienteJson.id === 0 ? 
                        //    <ClientesAlta onChangeAlta={(jsondb) => alert(JSON.stringify(jsondb))}/>
                           <ClientesAlta onChangeAlta={(jsondb) => {
                                let arreglo = []
                                arreglo.push(arraydb)
                                arreglo.push(jsondb)
                                setArraydb(arreglo)
                                setClienteJson(jsondb)
                            }}/>
                        :
                            null 
                        }
                    </div>
                </div>
            </div>
            )












        
        //             </div>
        //             <div className="cuerponotacn">
        //                 <h5>Detalle</h5>
        //                 <table>
        //                     <thead>
        //                         <tr>
        //                             <th>Prenda</th>
        //                             <th>Descripción</th>
        //                             <th>Cantidad</th>
        //                             <th>Precio Unitario</th>
        //                             <th>Total</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         <tr>
        //                             <td>Pantalón</td>
        //                             <td></td>
        //                             <td>0</td>
        //                             <td>$ 100</td>
        //                             <td>$ 0</td>
        //                         </tr>
        //                         <tr>
        //                             <td>Camisa</td>
        //                             <td></td>
        //                             <td>0</td>
        //                             <td>$ 100</td>
        //                             <td>$ 0</td>
        //                         </tr>
        //                         <tr>
        //                             <td>Saco</td>
        //                             <td></td>
        //                             <td>0</td>
        //                             <td>$ 100</td>
        //                             <td>$ 0</td>
        //                         </tr>
        //                         <tr>
        //                             <td>Abrigo</td>
        //                             <td></td>
        //                             <td>0</td>
        //                             <td>$ 100</td>
        //                             <td>$ 0</td>
        //                         </tr>
        //                     </tbody>
        //                 </table>
        //             </div>
        //             <br />
        //         </div>
        //     </div>
        // )
}

export default Notas;