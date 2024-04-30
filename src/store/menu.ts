import { create } from "zustand";
import { MENU_ITEMS } from "@/constants/menuItems";
import { MenuItem } from "@/types/menu";


interface MenuState {
  isOpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
  items: MenuItem[];
  updateList: (item: MenuItem) => void;
}

export const useMenuStore = create<MenuState>((set, get) => {  
  return {
    isOpenMenu: false,
    setOpenMenu: (open) => set({ isOpenMenu: open }),
    items: MENU_ITEMS,
    updateList: (item) =>
      set((state) => {
        const newState = state.items.map((obj: any) => {
          if (obj.href === item.href) {
            return { ...obj, isOpen: !item.isOpen };
          }
          return obj;
        });
        return { ...state, items: newState };
      }),    
  };
});
