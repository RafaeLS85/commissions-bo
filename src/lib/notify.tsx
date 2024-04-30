
import { toast, Slide } from "react-toastify";

export const showSnackbar = (message: string) => {
    toast(message, {        
        closeButton: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        transition: Slide   
      });
}


