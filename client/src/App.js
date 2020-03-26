import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage';
import {makeStyles} from '@material-ui/core/styles';
import TopBar from './components/topBar/topBar';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'relative',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    color: 'primary',
  }
}));

function App() {

  const classes = makeStyles(); 

  return (
    <div className="App">
      <TopBar/>
      <HomePage/>
    </div>
  );
}

export default App;