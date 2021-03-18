import {makeStyles} from "@material-ui/core";

const useImagePlaceholderStyles = makeStyles((theme) => ({
    imgPlaceholder: ({imgSrc}) => ({
        width: 200,
        height: 300,
        backgroundColor: '#eaeaea',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginLeft: 0,
        marginRight: 20,

        '& > .imageBlock': {
            background: `url(${imgSrc}) center center no-repeat`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        }
    }),
    uploadInput: {
      display: 'none'
    },
}))

export default useImagePlaceholderStyles
