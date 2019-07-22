import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  modalWrap: {
    position: "absolute",    
    top: "0",
    paddingTop: "100",
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
    border: "2px solid #000",
    boxShadow: theme.shadows[8],    
    outline: "none",
    borderRadius: "20px",
  },
  modalHeader:{
    color: "white",
    backgroundColor: "#BD34D2",
    padding: "1px 20px",
    textAlign: "center",
  },
  modalBody:{
    width: "100%",
    padding: "2px 16px",
  },
  modalFooter:{
    width: "100%",
    textAlign: "Right",
    padding: "0px 10px",
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
    textAlign: "center",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p>Click to get the full Modal experience!</p>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        aria-finally="simple-modal-footer"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.modalWrap}>
          <div id="modal-title" className={classes.modalHeader}>
            <Avatar alt="mherna" src="../images/m.hernandez.careces.jpg" className={classes.bigAvatar} />
            <h3>Mario Hernandez Caceres</h3>            
            <hr></hr>
            <h6>Application Development Analyst</h6>
          </div>
          <div id="simple-modal-description" className={classes.modalBody}>
            <p>logica para los ships</p>
            <i class="material-icons">email</i>
            <b>Contacto: </b><h6>m.hernandez.careces@accenture.com</h6>
            <i class="material-icons">business</i>
            <b>Contrato: </b><h6>Banco Estado</h6>
            <i class="material-icons">contacts</i>
            <b>Counselor: </b><h6>Fabian Aburto</h6>
          </div>
          <div id="simple-modal-finally" className={classes.modalFooter}>
          <hr></hr>
            <Button color="Default" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
