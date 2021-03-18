import {makeStyles} from "@material-ui/core";

const useNewMovieFormStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: 380,
        position: 'relative',
    },
    movieForm: {
        display: 'flex',
    },
    dialogInput: {
        width: '100%',
        margin: '5px 0'
    },
    closeIcon: {
        position: 'absolute',
        right: 20,
        top: 20,
        fontSize: 30,
        color: theme.palette.primary.main,
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    }
}))

export default useNewMovieFormStyles
