import {makeStyles} from "@material-ui/core";

export const useNewMovieFormStyles = makeStyles((theme) => ({
    dialog: {
        minWidth: 380,
        position: 'relative',
    },
    movieForm: {
        display: 'flex',
        '& > *': {
            margin: '0 20px'
        }
    },
    imgPlaceholder: ({imgSrc}) => ({
        width: 200,
        height: 300,
        border: '1px solid black',
        backgroundColor: '#eaeaea',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',

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

export const useMovieItemDetailedStyles = makeStyles((theme) => ({
    movieItem: {
        width: '100%',
        margin: 10,
        display: 'flex',
    },
    movieImage: ({imgSrc}) => ({
        width: 250,
        minHeight: 400,
        background: `url(${imgSrc}) center center no-repeat`,
        backgroundSize: 'cover',
        marginLeft: 0,
        borderRadius: 10,
        marginRight: 20
    }),
    movieDetails: {
        flex: 1,
        minWidth: 250,
    }
}))
