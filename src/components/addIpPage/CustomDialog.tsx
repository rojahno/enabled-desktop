import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import Link from '@material-ui/core/Link';
import { Divider } from '@material-ui/core';
import iphoneSettings from './../../images/iphone-settings.png';
import iphoneWifi from './../../images/iphone-settings-wifi.png';
import iphoneAbout from './../../images/iphone-settings-about.png';
import androidSettingsFirst from '../../images/Android-Settings-Main-1.jpg';
import androidSettingsSecond from '../../images/Android-Settings-Main-2.jpg';
import androidAbout from '../../images/Android-Settings-About.jpg';
import androidStatus from '../../images/Android-Settings-Status.jpg';
import mobileIp from '../../images/mobile-ip.jpg';
import { DialogActions, DialogContent, DialogTitle } from './DialogComponents';

//Change the style of the element
const useStyles = makeStyles(function (theme: Theme) {
  return createStyles({
    root: {
      color: '#3c3c3c',
      textDecoration: 'underline',
      fontSize: '4',
    },
    dialogContent: {
      minWidth: '50vw',
      overflowX: 'hidden',
    },
    contentText: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    imageContainer: {
      width: '60%',
    },

    image: {
      width: '100%',
      paddingRight: '15px',
    },
    divider: {
      margin: '15px',
    },
  });
});

/**
 * The custom dialog component. Open a dialog when the link component is clicked.
 * The dialog shows how to find an IP adress.
 */
export default function CustomDialog(_props: any) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  return (
    <div>
      <Link
        className={classes.root}
        component="button"
        variant="body2"
        onClick={handleClickOpen('paper')}
      >
        Find ip address
      </Link>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          How to find ip
        </DialogTitle>
        <DialogContent dividers className={classes.dialogContent}>
          <h3>On enabled mobile app:</h3>
          <div>
            <ol>
              <li>Open the enabled mobile app</li>
              <li>Press the menu button</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={mobileIp} />
              </div>
              <li>Press "Show Mobile IP address" </li>
              <li>It should now be displayed to you</li>
            </ol>
          </div>
          <Divider className={classes.divider} />
          <h3>On iphone:</h3>
          <div>
            <ol>
              <li>Open settings</li>
              <li>Press the 'Wi-Fi' tab</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={iphoneSettings} />
              </div>
              <li>Select the information icon</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={iphoneWifi} />
              </div>
              <li>That's it. You can now read your IP Adress</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={iphoneAbout} />
              </div>
            </ol>
          </div>
          <Divider className={classes.divider} />
          <h3>On android:</h3>
          <div>
            <ol>
              <li>Open settings</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={androidSettingsFirst} />
              </div>
              <li>Navigate to "about phone" and select it</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={androidSettingsSecond} />
              </div>
              <li>Navigate to "status" and select it</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={androidAbout} />
              </div>
              <li>That's it. You can now read your IP Adress</li>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={androidStatus} />
              </div>
            </ol>
          </div>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
