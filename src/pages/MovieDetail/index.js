import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Grid, Typography, CircularProgress } from "@material-ui/core";
import style from "./style";

import { movieResult as movieResultSelector, isSearchLoading } from '../../redux/selectors';
import { searchMovieById } from "../../redux/actions/search";
import Mapa from "../../components/Map";
export default ({ match }) => {

    const classes = style();
    const dispatch = useDispatch();
    const movieResult = useSelector( state => movieResultSelector(state) );
    const movieId = match.params.id;
    const isLoading = useSelector( state => isSearchLoading(state) );
    
    useEffect( () => {
        if( (!movieResult && movieId) || (movieResult.imdbID !== movieId) ){
            dispatch( searchMovieById({ movieId }) ); 
        } 
    } );

    if( !movieResult || isLoading ){ 
        return <Card className={classes.container}>
            <Grid item className={classes.titleGridContainer}>
                <CircularProgress size={70} color="primary" /> 
            </Grid>
            </Card>
    }

    return ( 
        <Card className={classes.container}>
            <Grid item>
                <Typography variant="h3"> {movieResult.Title} </Typography>
                <img src={movieResult.Poster} />
                <Typography> <strong> Actores: </strong> {movieResult.Actors} </Typography>
                <Typography> <strong> Director: </strong> {movieResult.Director} </Typography>
                <Typography> <strong> Pais: </strong> {movieResult.Country} </Typography>
                <Typography> <strong> Clasificación: </strong> {movieResult.Rated} </Typography>
                <Typography> <strong> Géneros: </strong> {movieResult.Genre} </Typography>
                <Typography> <strong> Actores: </strong> {movieResult.Actors} </Typography>
                <Typography> <strong> Premios: </strong> {movieResult.Awards} </Typography>
                <Typography> <strong> Sinopsis: </strong> {movieResult.Plot} </Typography>
            </Grid>
            <Mapa />
        </Card> 
    );
}
