import { useState } from "react";
import { Alert, Snackbar } from "@mui/material/index";

function CustomMessage() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Snackbar
        open={isOpen}
        autoHideDuration={5000}
        onClose={() => handleClose}
      >
        <Alert
          severity="error"
          onClose={() => handleClose}
          sx={{ width: "100%" }}
        >
          This is an error message!
        </Alert>
      </Snackbar>
    </>
  );
}

export default CustomMessage;
