import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: 380,
        position: 'relative',
    },
    dialogForm: {},
    dialogInput: {
        width: '100%',
        margin: '5px 0'
    },
    dialogLogo: {
        width: '100%',
        textAlign: 'center',
        marginBottom: 10,
        '& img': {
            width: 30
        }
    },
    closeIcon: {
        position: 'absolute',
        left: 20,
        top: 20,
        fontSize: 30,
        color: theme.palette.primary.main,
        cursor: 'pointer',
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    }
}))

export default useStyles
