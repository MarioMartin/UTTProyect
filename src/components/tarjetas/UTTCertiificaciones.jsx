import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import UTSChip from '../UTShip';

const useStyles = makeStyles(theme => ({
    root: {
        // position: "absolute",    
    },
}));

const lista= ["uno","a modo de ejemplo",,"certifcacion CMMI","certificacion ITIL","certificacion AGILE","certoficacion nivel 2"];


export default function UTTCertificaciones(props) {
    const classes = useStyles();
    const [certificaciones, setCertificaciones] = React.useState(props.data);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <UTSChip data={certificaciones}/>
                </div>
            </div>
        </div>

    );
}