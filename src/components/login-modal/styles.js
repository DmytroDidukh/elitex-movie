import {makeStyles} from "@material-ui/core";

const useLoginModalStyles = makeStyles(() => ({
    error: {
        color: "#ff0015",
        backgroundColor: '#ffc5c56e',
        border: '1px solid #ff0015',
        borderRadius: 5,
        padding: 5,
        fontSize: '.8em'
    },
    header: {

        width: 'fit-content',
        '& > h6': {
            display: 'inline',
            borderBottom: '1px solid black',
        },
        '& span': {
            color: '#797979',
            fontStyle: 'italic',
            marginLeft: '10px',
            fontSize: '.7em'
        },
    }
}))

export default useLoginModalStyles
