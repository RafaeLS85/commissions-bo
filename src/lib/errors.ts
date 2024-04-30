import { Slide, toast } from "react-toastify";

export const showErrors = ({ title }: { title: string } ) => {
  toast.error(title, {
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

// export const showErrors = ({
//   title,
//   description,
// }: {
//   title: string;
//   description?: string;
// }) => {
//     toastsTrigger.error({
//         title,
//         description,
//     })
// };

// const skuDontExist = "El SKU no existe.";
// const sellerDiscount = "No es posible crear un descuento para SKUs del seller."
// const sellerCommission = "No es posible crear comisiones para SKUs del seller."
// const alreadyExist = "Ya existe un descuento para el SKU."


// export const renderErrors = (data: any) => {

//   if (data?.status === "ERROR") {
//     // console.log("status = error", data);

//     if(data?.message === skuDontExist){
//       showErrors({
//         title: "El SKU indicado no existe",
//         description: "Verificá el dato y volvé a intentar."
//       });
//     }else if (data?.message === sellerDiscount) {
//       showErrors({
//         title: "Error al crear el descuento",
//         description: "No se pueden crear descuentos para SKUs de seller.",
//       });
//     }else if (data?.message === sellerCommission) {
//       showErrors({
//         title: "Error al crear la comisión",
//         description: "No se pueden crear comisiones para SKUs de seller.",
//       });
//     }else if( data?.message === alreadyExist) {
//       showErrors({
//         title: "Ya existe un descuento para el SKU",
//         description: "Verificá el dato y volvé a intentar.",
//       });
//     }else{
//       showErrors({
//         title: "Error",
//         description: JSON.stringify(data.message),
//       });
//     }

//     console.error(data.message);
//   }

//   // unexpected errors

//   if(data.status === 500){
//     showErrors({
//       title: "Error",
//       description: JSON.stringify(data.message)
//     })
//   }

//   if (data?.statusCode) {
//     showErrors({
//       title: "Error",
//       description: JSON.stringify(data.message),
//     });
//     console.error(data.message);
//   }

// }