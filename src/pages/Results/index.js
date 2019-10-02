// TERCEROS
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Card, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';

// PROPIOS
import { searchMovie } from "../../redux/actions/search";
import { movieResults, isSearchLoading } from "../../redux/selectors";
import MovieResult from '../../components/MovieResult';


export default ({location}) => {
    const dispatch = useDispatch();
    const movies = useSelector( state => movieResults(state) );
    const isLoading = useSelector( state => isSearchLoading(state) );
    const [isLokked, setIsLokked] = useState(false);

    useEffect( () => {
        const { movieName } = queryString.parse(location.search);
        if( movieName && !isLokked ) { setIsLokked(true); dispatch( searchMovie({ movieName }) ); };
    } );

    // componente html para cargar las imagenes
    const renderMovies = () => {
        if(movies){ return movies.map( (value, index) => <MovieResult key={index} {...value} /> ); }
        else if(isLoading) { return <CircularProgress size={70} color="primary" /> }
        else { return <div></div> }
    };

    return (
        <Container> 
            <Card>
                <Grid container>
                    {renderMovies()}
                </Grid>
                
            </Card> 
        </Container>)
}