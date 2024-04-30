import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SessionState {
  session: {    
    iss: string;
    sub: string;
    aud: string[];
    exp: number;
    iat: number;
    email: string;
    permissions: string[];
    name: string;
  };
  token: string;
  updateToken: (token: string) => void;
  updateSession: (session: any) => void;
  getSession?: () => void;
  deleteSession?: () => void;
  updatePermissions?: () => void;
}

export const useSessionStore = create<SessionState>()(
  persist(
    (set, get) => {
      return {
        session: {         
          iss: "",
          sub: "",
          aud: [],
          exp: 0,
          iat: 0,
          email: "",
          permissions: [],
          name: "",
        },
        token: "",
        updateToken: (token) => set({ token }),
        updateSession: (session) => set({ session }),

        // getSession: async () => {
        //   const session = await sessionService.get();
        //   // decode token
        //   console.log("session service", { session });
        //   set({ session });
        // },

        // deleteSession: () => set({ session: null }),
      };
    },
    {
      name: "session",
    }
  )
);
