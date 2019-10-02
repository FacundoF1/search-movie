import { makeStyles } from '@material-ui/core';

const contenedStyleObj = {
    display: 'flex',
    alignsItems: 'center',
    justifyContent: 'center',
}

export default makeStyles({
    container: {
        height: '95vh',
        flexDirection: 'column',
        ...contenedStyleObj
    },
    cardContainer: {
        height: 200,
        width: 200,
        padding: '2rem',
        ...contenedStyleObj
    },
    poster: {
        width: 120,
        boxShadow: "8px 15px 10px #9E9E9E"
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer: {
        ...contenedStyleObj,
        fontSize: '2rem'
    },
    textFieldSearch: {
        width: '90%'
    }, 
    searchBotton: {
        margin: 10,
        
    }
})