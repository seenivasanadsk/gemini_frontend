import { Alert, Slide, Snackbar } from "@mui/material";
import { useNotification } from "../app/notify_context";

function Notify() {
  const { notify, setNotify } = useNotification();

  const handleClose = () => {
    setNotify({ ...notify, message: "" });
  };

  return (
    <Snackbar
      open={!!notify.message}
      autoHideDuration={3000}
      onClose={handleClose}
      TransitionComponent={(props) => <Slide {...props} direction="up"></Slide>}
    >
      <Alert
        variant="filled"
        severity={notify.type || "error"}
        onClose={handleClose}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
}

export default Notify;
