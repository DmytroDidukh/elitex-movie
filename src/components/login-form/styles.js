import {makeStyles} from "@material-ui/core";

const useLoginFormStyles = makeStyles(() => ({
    loginFormInputs: {
        width: 300,
        '@media (max-width: 768px)': {
            minWidth: '100%',
        }
    },
    input: {
        width: '100%',
        margin: '15px 0',
    },
}))

export default useLoginFormStyles
