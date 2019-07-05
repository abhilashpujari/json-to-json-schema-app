import React, { useState, useEffect } from 'react';
import { Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

let openSnackbarFn;

const Notifier = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    openSnackbarFn = openSnackbar;
  }, [])

  const handleSnackbarClose = () => {
    setOpen(false);
    setMessage('');
  };

  const openSnackbar = ({ message }) => {
    setOpen(true);
    setMessage(message);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleSnackbarClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={handleSnackbarClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  )
}

export function openSnackbar({ message }) {
  openSnackbarFn({ message });
}

export default Notifier;