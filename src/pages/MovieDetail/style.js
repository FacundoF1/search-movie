import { makeStyles } from '@material-ui/core';

const contenedStyleObj = {
    display: 'flex',
    alignsItems: 'center',
    justifyContent: 'center',
}

export default makeStyles({
    container: {
        // height: '95vh',
        flexDirection: 'column',
        ...contenedStyleObj
    }
})