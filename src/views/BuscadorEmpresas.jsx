import React, { Fragment } from 'react';
import UTTarjetaEmpresa from '../components/tarjetas/UTTarjetaEmpresa';





export default function BuscadorEmpresas() {
    return (
        <Fragment>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h3>buscador</h3>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8">
                        <UTTarjetaEmpresa />
                    </div>
                    <div className="col-md-4">
                        
                    </div>
                </div>
            </div>
        </Fragment>
    );
}