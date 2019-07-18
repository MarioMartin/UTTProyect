import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

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
    width:"80%",
    left: "10%",
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
    padding: "2px 16px",
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
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.modalWrap}>
          <div id="modal-title" className={classes.modalHeader}>
            <h4>IMAGEN</h4>
            <h2>Melanie Suhr</h2>
            <hr></hr>
          </div>
          <div id="simple-modal-description" className={classes.modalBody}>
            <b>Skills: </b><p>Ships</p>
            <b>Position: </b><p>Application Development Associate</p>
            <b>Contacto: </b><p>m.suhr.hernandez</p>
            <b>Contrato: </b><p>Banco Estado</p>
            <b>Counselor: </b><p>Fabian Aburto</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}
