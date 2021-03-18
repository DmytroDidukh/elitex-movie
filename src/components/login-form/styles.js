import {makeStyles} from "@material-ui/core";

const useNewMovieFormStyles = makeStyles(() => ({

    loginFormInputs: {
        minWidth: 400,
        '@media (max-width: 768px)': {
            minWidth: '100%',
        }
    },
    input: {
        width: '100%',
        margin: '20px 0',
    },
    inputTitle: ({shouldValidate, titleValue}) => ({
        color: shouldValidate && !titleValue ? 'red' : 'black'
    }),
}))

export default useNewMovieFormStyles
