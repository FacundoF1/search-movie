import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import style from "./style";

import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MovieWithoutResult = () => {

    const classes = style();

    return (
        <div className={classes.root}>
            <Grid>
                <Typography variant="h4"> Sin Resultado <FontAwesomeIcon icon={faTimes} /> </Typography>
            </Grid>
        </div>
    )

}

export default withRouter( MovieWithoutResult );

// <AppBar position="fixed" color="primary" className={classes.appBar}>
//                     <Toolbar>
//                         <IconButton edge="start" color="inherit" aria-label="open drawer">
//                             <MenuIcon />
//                         </IconButton>
//                         <Fab color="secondary" aria-label="add" className={classes.fabButton}>
//                             <AddIcon /> 
//                         </Fab> 
//                         <div className={classes.grow} />
//                         <IconButton color="inherit">
//                             <SearchIcon />
//                         </IconButton>
//                         <IconButton edge="end" color="inherit">
//                             <MoreIcon />
//                         </IconButton>
//                     </Toolbar>
//                 </AppBar>