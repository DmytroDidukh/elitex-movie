import React, {useRef, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import movieListStyles from "./styles";
import MovieItem from "../movie-item";
import MovieDetails from "../movie-details";

const MovieList = ({list}) => {
    const classes = movieListStyles()

    const inputRef = useRef(null)
    const [imgUrl, setImgUrl] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState(0)

    const handleOpenModal = () => {
        //inputRef.current.click()
        setIsModalOpen(true)
    }
    const handleCloseModal = () => setIsModalOpen(false)

    console.log(list[selectedMovie])
    console.log(list)

    return (
        <div className={classes.movieList}>
            {
                list.map(item => (
                    <MovieItem key={item.title} data={item} setIsModalOpen={setIsModalOpen}/>
                ))
            }
            {list.length &&
                <MovieDetails open={isModalOpen}
                           handleClose={handleCloseModal}
                           movie={list[selectedMovie]}/>
            }
        </div>
    )
}

export default MovieList
