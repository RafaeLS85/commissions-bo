import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import styled from "styled-components";

const StyledContainer = styled(ToastContainer)`
   &&&.Toastify__toast-container  {
    width: auto;
  }
  .Toastify__toast {
    margin-bottom: 0;
    width: auto;
    border-radius: 16px;
    min-height: 44px;
  } 
  .Toastify__toast-theme--dark {
    font-family: "Roboto";
    font-size: 14px;
    color: #fafaff;
    font-weight: 400;
    line-height: 20px;
    background-color: #3b3b4e;
  }
`;

export default function SnackbarContainer() {
  return (
    <div data-id="snackbar-container" id="snackbar-container">
      <StyledContainer
        position="bottom-center"
        closeButton={false}
        autoClose={3000}
        hideProgressBar
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </div>
  );
}
