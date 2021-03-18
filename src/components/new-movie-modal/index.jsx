import React from 'react'
import {
    Button,
    Typography,
    DialogActions,
    DialogContent, CircularProgress,
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import Modal from "../modal";
import NewMovieForm from "../new-movie-form";

import useNewMovieModalStyles from "./styles";

const NewMovieModalComponent = ({
                                    modalOpen,
                                    handleModalClose,
                                    beforeCloseHandler,
                                    shouldValidate,
                                    imageFile,
                                    titleValue,
                                    descriptionValue,
                                    setImageFile,
                                    setTitleValue,
                                    setDescriptionValue,
                                    onSubmit,
                                    loading
                                }) => {

    const classes = useNewMovieModalStyles()

    return (
        <Modal
            open={modalOpen}
            handleClose={handleModalClose}
        >
            {
                loading ? (
                    <CircularProgress className={classes.circularProgress}/>
                ) : (
                    <>
                        <DialogContent className={classes.dialog}>
                            <ClearIcon className={classes.closeIcon}
                                       onClick={beforeCloseHandler}/>
                            <Typography variant="h6">Add your movie...</Typography>
                            <NewMovieForm
                                shouldValidate={shouldValidate}
                                imageFile={imageFile}
                                titleValue={titleValue}
                                descriptionValue={descriptionValue}
                                setImageFile={setImageFile}
                                setTitleValue={setTitleValue}
                                setDescriptionValue={setDescriptionValue}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={onSubmit}
                                    variant="contained"
                                    color="primary"
                                    autoFocus>
                                Add
                            </Button>
                            <Button onClick={beforeCloseHandler}
                                    variant="contained"
                                    color="default">
                                Cancel
                            </Button>
                        </DialogActions>
                    </>
                )
            }
        </Modal>
    )
}

export default NewMovieModalComponent;
