import React, {useRef, useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import movieItemStyles from "./styles";
import NewMovieForm from "../new-movie-form";

const MovieItem = ({data, children, setIsModalOpen = () => {}}) => {
    const classes = movieItemStyles()

    return (
        <Card className={classes.root} onClick={() => setIsModalOpen(true)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data.image}
                    title={data.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    {children}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default MovieItem
