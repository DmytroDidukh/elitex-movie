import React from 'react'

const MovieItem = ({
                       movieData,
                       movieIndex,
                       children,
                       handleClick = () => {},
                       useStyles}) => {
    const classes = useStyles({imgSrc: movieData.image})

    return (
        <div className={classes.movieItem}
             onClick={() => handleClick(movieIndex)}>
            <div className={classes.movieImage}/>
            <div className={classes.movieDetails}>
                <h4>{movieData.title}</h4>
                {children}
            </div>
        </div>
    )
}

export default MovieItem
