import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import style from "./style";
import { withRouter } from "react-router-dom";

const MovieResult = ({ Poster, Title, Type, Year, imdbID, history }) => {

    const classes = style();
    
    const handleSeeMovie = () => {
        history.push(`/movie/${imdbID}`);
    };

    return ( 
        <Card className={classes.container}>
            <Grid item>
                <img className={classes.poster} src={Poster} alt={Title} />
            </Grid>
            <Grid item className={classes.titleGridContainer}>
                <Typography> {imdbID} </Typography>
                <Typography> {Title} </Typography>
                <Typography> {Type} </Typography>
                <Typography> {Year} </Typography>
                <Button color="primary" variant="contained" onClick={handleSeeMovie} > Ver mas </Button>
            </Grid>
           
        </Card> 
    );

}

export default withRouter( MovieResult );