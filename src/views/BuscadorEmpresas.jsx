import React, { Fragment } from 'react';
import UTTarjetaEmpresa from '../components/tarjetas/UTTarjetaEmpresa';
import UTBuscadorEmpresas from '../components/buscadores/UTBuscadorEmpresas';

import { listaEmpresas, empresas } from '../empresas.json';


export default function BuscadorEmpresas() {

    const [empresaSeleccionada, setempresaSeleccionada] = React.useState(empresas);

    console.log(empresas);
    function getBusqueda(termino) {

        if (termino == "Todas") {
            setempresaSeleccionada(empresas);
        } else {
            const seleccion = empresas.filter((e, i) => {
                return e.nombre == termino;
            })
            setempresaSeleccionada(seleccion);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row" style={{ height: 150 }}>
                    <div className="col-md-12 mt-5">
                        <UTBuscadorEmpresas data={listaEmpresas} getBusqueda={getBusqueda} />
                        
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <UTTarjetaEmpresa data={empresaSeleccionada} />
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </Fragment>
    );
}