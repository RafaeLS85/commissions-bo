import HomeIcon from "@/components/common/icons/menu/HomeIcon";
import PercentIcon from "@/components/common/icons/menu/PercentIcon";
import UploadIcon from "@/components/common/icons/menu/UploadIcon";
import DefaultComIcon from "@/components/common/icons/menu/DefaultComIcon";
import CommercialDiscountIcon from "@/components/common/icons/menu/CommercialDiscountIcon";
import { PERMISSIONS } from "./permissions";
import { MenuItem } from "@/types/menu";

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Comisiones base",
    href: "/comisiones-base",
    icon: <HomeIcon />,
    permissions: [PERMISSIONS.COMMISSION_READ],  
    isOpen: false,
    submenu: [
      {
        name: "Sellers",
        href: "/comisiones-base/sellers",
        icon: <></>,
        permissions: [PERMISSIONS.COMMISSION_READ],       
      },
      {
        name: "Categorías",
        href: "/comisiones-base/categorias",
        icon: <></>,
        permissions: [PERMISSIONS.COMMISSION_READ],       
      },
      {
        name: "Default",
        href: "/comisiones-base/comisiones-default",
        icon: <DefaultComIcon />,
        permissions: [PERMISSIONS.COMMISSION_READ],   
      },      
    ], 
  },
  {
    name: "Comisiones especiales",
    href: "/comisiones-especiales",
    icon: <PercentIcon />,
    permissions: [PERMISSIONS.COMMISSION_READ],    
    isOpen: false,
    submenu: [
      {
        name: "Comisiones comerciales",
        href: "/comisiones-especiales/comercial",
        icon: <></>,
        permissions: [PERMISSIONS.COMMISSION_READ],       
      },     
    ],
  },
  {
    name: "Carga masiva",
    href: "/carga-masiva",
    icon: <UploadIcon />,
    permissions: [PERMISSIONS.MASSIVE_CHARGE],    
  },  
  {
    name: "Descuentos comerciales",
    href: "/descuentos-comerciales",
    icon: <CommercialDiscountIcon />,
    permissions: [PERMISSIONS.REBATES_READ],    
  },
];
