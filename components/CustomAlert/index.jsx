import { forwardRef } from "react";
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});

function CustomAlert({ data, handleClose }) {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={data.open} autoHideDuration={2000} onClose={handleClose}>
      <Alert severity={data.type} onClose={handleClose} sx={{ width: "100%" }}>
        {data.message}
      </Alert>
    </Snackbar>
  );
}

export default CustomAlert;
