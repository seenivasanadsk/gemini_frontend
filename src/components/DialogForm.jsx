/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useRef } from "react";

function DialogForm({ title, children, showFormDialog, closeForm }) {
  const saveCallback = useRef(null);
  const resetCallback = useRef(null);

  // Modified children for pass props, we can pass props as second parameter as object for React.cloneElement
  const modifiedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      saveCallback: (cb) => (saveCallback.current = cb),
      resetCallback: (cb) => (resetCallback.current = cb),
    })
  );

  function handleSave() {
    if (saveCallback.current) {
      saveCallback.current();
    }
  }
  function handleReset() {
    if (resetCallback.current) {
      resetCallback.current();
    }
  }

  return (
    <Dialog open={showFormDialog} maxWidth="xs" fullWidth>
      <DialogTitle>New {title}</DialogTitle>
      <DialogContent>{modifiedChildren}</DialogContent>
      <DialogActions sx={{ pb: 2, pr: 2 }}>
        <Button color="info" variant="contained" onClick={handleReset}>
          Reset
        </Button>
        <Button color="secondary" variant="contained" onClick={closeForm}>
          Close
        </Button>
        <Button variant="contained" onClick={handleSave} color="success">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default DialogForm;
