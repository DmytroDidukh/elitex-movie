import React from 'react'
import {
    Dialog,
} from "@material-ui/core";

const Modal = ({open, handleClose, children}) => {

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {children}
        </Dialog>
    )
}

export default Modal
