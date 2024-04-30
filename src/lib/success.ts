import { Slide, toast } from "react-toastify";

export const showSuccess = ({ title }: { title: string } ) => {
    toast.success(title, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
}