import {makeStyles} from "@material-ui/core";

const useLoginModalStyles = makeStyles(() => ({
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
