import React from "react";
// import { Card, Grid, Typography, Button } from "@material-ui/core";
import style from "./style";
import { withRouter } from "react-router-dom";

import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = ({ imdbID, history }) => {

    const classes = style();
    return ( 
        <div className={classes.container}>
            <Map
                className={classes.map}
                zoom={15}
                center={[-27.4612107, -58.8259053]}>
                <TileLayer 
                    url="https://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
                    subdomains={['mt0','mt1','mt2','mt3']} 
                    attribution={'Yugoo Team'}
                    maxZoom={19}
                />
            </Map>
        </div> 
    );

}

export default withRouter( Mapa );