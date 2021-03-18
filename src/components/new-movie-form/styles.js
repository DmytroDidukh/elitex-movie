import {makeStyles} from "@material-ui/core";

const useNewMovieFormStyles = makeStyles((theme) => ({
    movieForm: {
        display: 'flex',
        '@media (max-width: 768px)': {
            flexDirection: 'column'
        }
    },
    movieFormInputs: {
        minWidth: 400,
        '@media (max-width: 768px)': {
            minWidth: '100%',
        }
    },
    input: {
        width: '100%',
        margin: '20px 0',
    },
}))

export default useNewMovieFormStyles
