import React, { Fragment } from 'react';
import UTTarjetaEmpresa from '../components/tarjetas/UTTarjetaEmpresa';
import UTBuscadorEmpresas from '../components/buscadores/UTBuscadorEmpresas';

import { listaEmpresas } from '../empresas.json';


export default function BuscadorEmpresas() {

    const [empresas, setEmpresas] = React.useState(listaEmpresas);

    console.log(empresas);
    function getBusqueda(termino) {

        if (termino == "Todas") {
            setEmpresas(listaEmpresas);
        } else {
            const empresa = listaEmpresas.filter((e, i) => {
                return e == termino;
            })
            setEmpresas(empresa);
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row" style={{ height: 150 }}>
                    <div className="col-md-12 mt-5">
                        <UTBuscadorEmpresas data={listaEmpresas} getBusqueda={getBusqueda} />
                        <UTBuscadorEmpresas data={listaEmpresas} getBusqueda={getBusqueda} />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <UTTarjetaEmpresa data={empresas} />
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </Fragment>
    );
}