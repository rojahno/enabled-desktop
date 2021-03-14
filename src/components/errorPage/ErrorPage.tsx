import React, { useState, useCallback } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import SimplePaper from '../SimplePaper';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { CortexDriver } from '../../modules/CortexDriver';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    paper: {
      margin: theme.spacing(3),
      width: theme.spacing(50),
      height: theme.spacing(50),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff95',
    },
    container: {
      margin: theme.spacing(2),
      display: 'flex',
      justifyContent: 'center',
    },
    profileList: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      flexGrow: 1,
      overflow: 'auto',
      width: '100%',
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: '3px',
    },
    listItems: {
      padding: '10px 20px',
      //backgroundColor:'white',
      display: 'flex',
      justifyContent: 'center',
      transition: 'transform ease-in 0.1s',
      fontSize: '18px',
      //boxShadow:'0px 8px 28px -6px rgba(24, 39, 75, 0.12)',
    },
  })
);

interface HandleRetry{
  handleRetry: () => void;
}

export default function ErrorPage({handleRetry}: HandleRetry) {
  const classes = useStyles();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {}, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <SimplePaper>
          <h3>An error has occured</h3>

          <ul>
            <li>
              Plaese make sure that the Emotiv BCI application is running.
            </li>
            <li>
            Please make sure a headset is connected to your pc and
           the Emotiv app'
            </li>
            <li>
              GIT GUD
            </li>
          </ul>

          <div className={classes.buttons}>
            <button onClick={handleRetry}>Retry</button>
          </div>
        </SimplePaper>
      </div>
    </div>
  );
}
