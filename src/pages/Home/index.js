import React, { useState } from 'react';
import { Container, Typography, Grid, Card, TextField, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default ({history}) => {
    const [searchText, setSearchText] = useState('');
    const handleSetSearchText = (event) => {
        setSearchText(event.target.value);
    };
    const handleSearchText = event => {
        // searchText stado actual del in put
        history.push(`/results?movieName=${searchText}`);
    };
    return (
        <Container> 
            <Card>
                <Grid container>
                    <Grid>
                        <Typography>
                            Bienvenido <FontAwesomeIcon icon={faCoffee} />
                        </Typography>
                    </Grid>
                </Grid>
                <TextField
                    type="search"
                    value={searchText}
                    placeholder="Buscar..."
                    onChange={ handleSetSearchText }
                />
                <Grid>
                    <Button variant="contained" size="large" onClick={handleSearchText}>
                        Buscar
                    </Button>
                </Grid>
            </Card> 
        </Container>
    )
}