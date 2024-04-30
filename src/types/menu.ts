export type MenuItem = {   
      name: string;
      href: string;
      icon: React.ReactNode;    
      permissions: string[];
      hasPermission?: boolean;
      isOpen?: boolean;
      submenu?: MenuItem[];    
  };


