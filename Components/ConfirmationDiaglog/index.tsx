import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

interface Dialog_Props {
  description: string;
  confirmButtonName: string;
  dialogState: { open: boolean; setOpen: (value: boolean) => void };
  onConfirm: Function;
}

export default function ConfirmationDialog(props: Dialog_Props) {
  const { open, setOpen } = props.dialogState;

  const handleClose = () => setOpen(false);

  const onSubmit = () => {
    props.onConfirm();
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogContent>
          <DialogContentText>{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button color="error" onClick={onSubmit}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
