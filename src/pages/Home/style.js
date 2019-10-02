import { makeStyles } from '@material-ui/core';

const contenedStyleObj = {
    display: 'flex',
    alignsItems: 'center',
    justifyContent: 'center',
}

export default makeStyles({
    container: {
        height: '100vh',
        flexDirection: 'column',
        ...contenedStyleObj
    },
    cardContainer: {
        height: 200,
        width: 200,
        padding: '2rem',
        // flexDirection: 'column',
        ...contenedStyleObj
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