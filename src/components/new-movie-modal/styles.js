import {makeStyles} from "@material-ui/core";

const useNewMovieModalStyles = makeStyles((theme) => ({
    circularProgress: {
        margin: '100px'
    },
    dialog: {
        minWidth: 380,
        position: 'relative',
        '@media (max-width: 450px)': {
            maxWidth: 300,
            minWidth: 'auto',
        }
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

export default useNewMovieModalStyles
