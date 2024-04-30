import React from "react";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
import { ControlsLeftContainer, ControlsMainWrapper } from "@/components/common/Controls.styles";
import SearchCategories from "../common/SearchCategories";

interface Props { 
  state: any;
  actions: any;
}
export default function CategoriesControls({ actions, state }: Props) { 
 
  const hasPermissionToCreate = usePermission({
    permission: PERMISSIONS.COMMERCIAL_COMMISSION_WRITE
  }); 

  return (
    <ControlsMainWrapper isCategories>
      <ControlsLeftContainer>             
        <SearchCategories
          id="categories-search-input"
          onSearch={actions.setSearchTerm}
          setPage={actions.setPage}          
        />
      </ControlsLeftContainer>          
    </ControlsMainWrapper>
  );
}
