/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles, Theme, createStyles } from '@material-ui/core';


//Change the style of the element
const useStyles = makeStyles(function (theme: Theme) {
  return createStyles({
    root: {
      color: '#3c3c3c',
      textDecoration: 'underline',
      fontSize: '4',
    },
  });
});
export default function ButtonLink({props}:any) {
  const classes = useStyles();
  return (
    <Link href="/find-ip"
      className={classes.root}
      component="button"
      variant="body2"
      onClick={() => {
      }}
    >
      Find ip address
    </Link>
  );
}
