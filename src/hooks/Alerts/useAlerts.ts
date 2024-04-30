import { useCallback, useEffect, useState } from "react";
// import useSnackBar from "../SnackBar/useSnackBar";

export const useAlerts = () => {
  const [message, setMessage] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false)
  const [openForm, setOpenForm] = useState(false);
  const openFormModal = useCallback(() => setOpenForm(true), []);
  const closeFormModal = useCallback(() => setOpenForm(false), []);

  const [open, setOpen] = useState(false);

  const onCleanMessage = useCallback(() => {
    setMessage("");
  }, []);

//   const { open, onClose } = useSnackBar({
//     openFlag: message,
//     callback: onCleanMessage,
//   });

  const onClose = useCallback(() => {
    setOpen(false);
    if (openForm) {
      closeFormModal();
    }
  },[openForm]);


  return {
    state: {
      message,
      description,
      success,
      open,
      openForm
    },
    actions: {
      setMessage,
      setDescription,
      onCleanMessage,
      setSuccess,
      onClose,
      openFormModal,
      closeFormModal
    },
  };
};