import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SettingSlider from './SettingSlider';
import StreamIndicator from './StreamIndicator';

const useStyles = makeStyles(() =>
  createStyles({
    comContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      fontSize: '15px',
      padding: '15px',
    },
    container: {
      padding: '7px',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
    },
    textContainer: {
      textAlign: 'center',
      fontSize: '15px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  })
);

interface ComProps {
  isComStream: boolean;
  hasConnection: boolean;
  handleChange: (
    event: React.ChangeEvent<{}>,
    value: number | number[]
  ) => void;
}
/**
 * The com page component. 
 */
export default function ComPage(props: ComProps) {
  const classes = useStyles();

  return (
    <div className={classes.comContainer}>
      <StreamIndicator isLive={props.hasConnection} />
      <div className={classes.container}>
        <SettingSlider
          sliderTitle={'Headset sensitivity'}
          handleChange={props.handleChange}
          minSteps={1}
          maxSteps={10}
          disabled={!props.isComStream}
          tooltip={
            ' Moving the slider to the right (10) will make it easier to trigger. ' +
            'Moving the slider to the left (1) will make the commands harder to' +
            ' trigger.'
          }
        />
      </div>
      <p>The supported commands are: Neutral, Push, Pull, Left and Right</p>
      <div className={classes.textContainer}>
        <p></p>
      </div>
    </div>
  );
}
