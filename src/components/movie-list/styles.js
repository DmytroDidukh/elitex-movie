import {makeStyles} from "@material-ui/core";

export const useMovieListStyles = makeStyles((theme) => ({
    movieList: {
        maxWidth: 1335,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap'
    },
}))

export const useMovieItemListStyles = makeStyles((theme) => ({
    movieItem: {
        width: 245,
        borderRadius: 0,
        border: '1px solid #e8e8e8',
        margin: 10,
        background: `linear-gradient(145deg, #fff, #ffffff)`,
        boxShadow: '5px 5px 21px #f0f0f0, -5px -5px 21px #ffffff',
        cursor: 'pointer',
        transition: 'transform .2s ease',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    movieImage: ({imgSrc}) => ({
        height: 350,
        width: '100%',
        background: `url(${imgSrc}) center center no-repeat`,
        backgroundSize: 'cover',
        marginLeft: 0
    }),
}))
