import React from "react";
import { ExpiredCommissionActions } from "@/hooks/Commissions/ExpiredCommission/types";
import { ControlsLeftContainer, ControlsMainWrapper } from "@/components/common/Controls.styles";
import { SelectSku } from "@/components/common/SelectSku";
import SearchSku from "@/components/common/SearchSku";

interface Props {
  selected: any;
  actions: ExpiredCommissionActions;
}

export default function ExpiredCommissionControls({
  selected,
  actions,
}: Props) {
  return (
    <ControlsMainWrapper>
      <ControlsLeftContainer>
        <SelectSku 
          id="expired-commission-select"
          actions={actions}
          selected={selected}
        />
        <SearchSku 
         id="expired-commission-search-input"
         onSearch={actions.setSearchTerm}
         setPage={actions.setPage}
         selected={selected}        
        />
      </ControlsLeftContainer>
    </ControlsMainWrapper>
  );
}
