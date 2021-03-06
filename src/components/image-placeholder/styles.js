import {makeStyles} from "@material-ui/core";

const useImagePlaceholderStyles = makeStyles(() => ({
    imgPlaceholder: ({imgSrc, shouldValidate}) => ({
        minWidth: 200,
        width: 200,
        height: 300,
        backgroundColor: shouldValidate && !imgSrc ? '#ff000040' : '#eaeaea',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        marginLeft: 0,
        marginRight: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: shouldValidate && !imgSrc ? '#ff0000' : '#cdcdcd',

        '& > .imageBlock': {
            background: `url(${imgSrc}) center center no-repeat`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100%'
        },
        '@media (max-width: 768px)': {
            margin: '20px auto'
        }
    }),
    uploadInput: {
      display: 'none'
    },
}))

export default useImagePlaceholderStyles
