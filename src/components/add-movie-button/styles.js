import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    addMovieBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        margin: '50px 20px 10px 0',
        '@media (max-width: 768px)': {
            position: 'fixed',
            right: 10,
            bottom: 10,
            margin: 0
        }
    },
    button: {
        marginLeft: 10,
        '@media (max-width: 768px)': {
            margin: 5,
            padding: 5,
            '& *': {
                fontSize: '1em',
            }
        }
    }
}))

export default useStyles
