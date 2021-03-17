import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 245,
        borderRadius: 0,
        border: '1px solid #e8e8e8',
        margin: 10,
        background: `linear-gradient(145deg, #fff, #ffffff)`,
        boxShadow: '5px 5px 21px #f0f0f0, -5px -5px 21px #ffffff'
    },
    movieImage: ({imgSrc}) => ({
        height: 350,
        width: '100%',
        background: `url(${imgSrc}) center center no-repeat`,
        backgroundSize: 'cover',
    }),
    media: {
        height: 350,

    }
}))

export default useStyles
