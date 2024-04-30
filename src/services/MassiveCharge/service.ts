import Cookie from "js-cookie";
import axios from "axios";


const config = (token: string) => ({
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data",
    authorization: "Bearer " + token,
  },
});

export const massiveChargeService = {  
  uploadMassiveCharge: async (massiveCharge: { file: File; email: string }) => {
    const token = Cookie.get("X-TOKEN-CORS") || "";
    const data = new FormData();
    data.append("file", massiveCharge.file);
    try {
      const response = await axios.post(
        // /api/plan/batch/upload
        "/proxy/massive-charge",
        data,
        {
          validateStatus:(s)=>{return s < 500}, //Evita el throw por status codes < a 500
          ...config(token)
        }
      );

      return {
        status: (response.status < 300),
        message: response.data.message
      };
    } catch (err) {
      return {
        status: false,
        message: "Falló la importación del archivo"
      };
    }
  },
};
