import { makeStyles } from '@material-ui/core';

const contenedStyleObj = {
    display: 'flex',
    alignsItems: 'center',
    justifyContent: 'center',
}

export default makeStyles({
    container: {
        height: '500px',
        width: '500px',
        flexDirection: 'column',
        ...contenedStyleObj
    },
    map: {
        height: '100vh',
        width: '100vh',
    }
})