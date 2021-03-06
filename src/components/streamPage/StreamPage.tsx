import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SimplePaper from '../utils/SimplePaper';
import { Link, useHistory } from 'react-router-dom';
import { Tab, Tabs } from '@material-ui/core';
import ComPage from './ComPage';
import FacPage from './FacPage';
import ReconnectLoader from './ReconnectLoader';

const useStyles = makeStyles(() =>
  createStyles({
    buttons: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      width: '100%',
      height: '100%',
      padding: '3px',
    },
    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifySelf: 'center',
      justifyContent: 'center',
      alignContent: 'center',
    },
  })
);

interface StreamProps {
  handleChange: (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => void;
  handleComPress: () => void;
  handleFacPress: () => void;
  isComStream: boolean;
  isConnected: boolean;
}
/**
 * The stream page component. Handles the change between the fac and com tabs and the back navigation.
 */
export default function StreamPage(props: StreamProps) {
  const classes = useStyles();

  const [isComTab, setIsComTab] = useState(true);
  const [value, setValue] = useState(0);

  const history = useHistory();

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    if (newValue === 0) {
      setIsComTab(true);
    } else setIsComTab(false);
    setValue(newValue);
  };

  const navigateBack = () => {
    history.push({
      pathname: '/ip',
    });

    console.log('back');
  };

  return (
    <SimplePaper>
      <h3>Stream</h3>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleTabChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Mental command" onClick={props.handleComPress} />
        <Tab label="Facial expression" onClick={props.handleFacPress} />
      </Tabs>
      <div className={classes.contentContainer}>
        {isComTab ? (
          <ComPage
            isComStream={props.isComStream}
            handleChange={props.handleChange}
            hasConnection={props.isConnected}
          />
        ) : (
          <FacPage hasConnection={props.isConnected} />
        )}
      </div>
      <ReconnectLoader
        handleCountDownReached={navigateBack}
        open={!props.isConnected}
        seconds={60}
      />

      <div className={classes.buttons}>
        <Link to="/ip">
          <button>Back</button>
        </Link>
      </div>
    </SimplePaper>
  );
}
