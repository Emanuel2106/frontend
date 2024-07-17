import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import FormReportes from './FormReportes'
import GridReportes from './GridReportes'

export default function ModalReportes({ open, onClose }) {
  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Reportes</DialogTitle>
        <DialogContent>
          <FormReportes />
          <GridReportes />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button onClick={onClose} autoFocus>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      
    </>
  );
}
