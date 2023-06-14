import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Alert, Snackbar } from "@mui/material/index";
import MessageContext from "contexts/MessageContext";
import Slide from "@mui/material/Slide";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function CustomMessage({ theme }) {
  const { t } = useTranslation();

  const { message } = useContext(MessageContext);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (message.content) {
      setIsOpen(true);
    }
    return () => {
      setIsOpen(false);
    };
  }, [message]);

  return (
    <>
      <Snackbar
        open={isOpen}
        onClose={() => setIsOpen(false)}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={TransitionDown}
      >
        <Alert
          severity={message.severity}
          sx={{
            width: "500px",
            background: `${message.severity} === 'error' ? `,
          }}
          onClose={() => setIsOpen(false)}
        >
          {t(`${message.content}`)}
        </Alert>
      </Snackbar>
    </>
  );
}

export default CustomMessage;
