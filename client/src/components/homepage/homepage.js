import React from 'react';
import {Button, Grid, Typography, Avatar, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertChartIcon from '@material-ui/icons/InsertChart';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    paper: {
      marginTop: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    btn: {
      marginBottom: theme.spacing(0),
      height: "250px",
      fontSize: "16px",
      textDecoration: "none",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      fontSize:'4rem',
      width: 'auto',
      height:'auto',
      backgroundColor: theme.palette.primary.main,
    },
  }));

export default function HomePage(props){

    const classes = useStyles();

    return(
        <div>
          <Container component="main" maxWidth="lg">
            <CssBaseline/>
            <div className={classes.paper}>
              <Grid container spacing={3}>
                <Grid item xs={6} sm={3}>
                  <Button fullWidth variant="contained" color="primary" size="large" className={classes.btn} href="/">
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Grid item>
                        <Avatar className={classes.avatar}>
                          <PersonAddIcon fontSize='inherit'/>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Typography component="h6" variant="h6">
                          Add TA
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button fullWidth variant="contained" color="primary" size="large" className={classes.btn} href="/">
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Grid item>
                        <Avatar className={classes.avatar}>
                          <AssignmentIcon fontSize='inherit'/>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Typography component="h6" variant="h6">
                          Assign applications
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button fullWidth variant="contained" color="primary" size="large" className={classes.btn} href="/">
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Grid item>
                        <Avatar className={classes.avatar}>
                          <InsertDriveFileIcon fontSize='inherit'/>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Typography component="h6" variant="h6">
                          Verify documents
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Button fullWidth variant="contained" color="primary" size="large" className={classes.btn} href="/">
                    <Grid container direction="column" justify="center" alignItems="center">
                      <Grid item>
                        <Avatar className={classes.avatar}>
                          <InsertChartIcon fontSize='inherit'/>
                        </Avatar>
                      </Grid>
                      <Grid item>
                        <Typography component="h6" variant="h6">
                          View Status
                        </Typography>
                      </Grid>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
    );
}