import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme =>({
    title:  {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export default function TopBar(){
    const classes = useStyles();

    return(
        <div>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        EE DUGC App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}