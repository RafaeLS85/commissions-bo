import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { BaseCommissionActions, BaseCommissionState } from "@/hooks/Commissions/BaseCommissions/types";
import { i18n } from "@/constants/commissions/legacy_i18n";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
const NewBaseCommissionModal = dynamic(
  () => import("./NewCommission/NewBaseCommission")
);
import {
  ControlsLeftContainer,
  ControlsMainWrapper,
  ControlsRightContainer,
} from "@/components/common/Controls.styles";
import SearchSku from "@/components/common/SearchSku";

interface Props {
  state : BaseCommissionState;
  actions: BaseCommissionActions;
}
export default function BaseCommissionControls({ actions, state }: Props) {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const hasPermissionToCreate = usePermission({
    permission: PERMISSIONS.COMMISSION_WRITE,
  });

  return (
    <>
      <ControlsMainWrapper>
        <ControlsLeftContainer>
          <SearchSku
            selected={{ id: "seller", label: "Seller" }}
            id="base-commission-search-input"
            onSearch={actions.setSearchTerm}
            setPage={actions.setPage}
          />
        </ControlsLeftContainer>
        <ControlsRightContainer>
          <Button
            id="newDiscountButton"            
            
            onClick={openModal}
            data-id="newDiscountButton"
            // disabled={!hasPermissionToCreate}
            
            colorScheme='purple'
          >
            {i18n["sellerCommission.new"]}
          </Button>
        </ControlsRightContainer>
      </ControlsMainWrapper>
      <NewBaseCommissionModal 
          open={isOpen} 
          closeModal={closeModal}
          state={state}
          actions={actions} 
      />
    </>
  );
}
