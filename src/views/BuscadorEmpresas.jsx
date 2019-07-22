import React, { Fragment } from 'react';
import UTTarjetaEmpresa from '../components/tarjetas/UTTarjetaEmpresa';





export default function BuscadorEmpresas() {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                    </div>
                    <div className="col-md-6">
                        <UTTarjetaEmpresa />
                    </div>
                    <div className="col-md-6">
                        <UTTarjetaEmpresa />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}