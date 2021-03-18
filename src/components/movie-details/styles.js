import {makeStyles} from "@material-ui/core";

export const useMovieItemDetailedStyles = makeStyles((theme) => ({
    movieItem: {
        width: '100%',
        margin: 10,
        display: 'flex',
        '@media (max-width: 550px)': {
            flexDirection: 'column'
        }
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
