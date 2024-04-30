import React, { useState } from "react";
import dynamic from "next/dynamic";
const NewDiscountPageForm = dynamic(() => import("../NewDiscount"));
import { CommercialDiscountActions, ExpiredDiscountActions } from "@/hooks/Discounts/CommercialDiscounts/types";
import {
  ControlsLeftContainer,
  ControlsMainWrapper,
  ControlsRightContainer,
} from "@/components/common/Controls.styles";
import { SelectSku } from "@/components/common/SelectSku";
import SearchSku from "@/components/common/SearchSku";
import { COMMERCIAL_DISCOUNTS } from "../utils/constants";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
import { Button } from "@chakra-ui/react";

interface Props {
  selected: any;
  actions: ExpiredDiscountActions;
  extraActions: CommercialDiscountActions;
}

export default function ExpiredDiscountControls({ selected, actions, extraActions }: Props) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const hasPermissionToCreate = usePermission({
    permission: PERMISSIONS.REBATES_CREATE,
  });

  return (
    <ControlsMainWrapper>
      <ControlsLeftContainer>
        <SelectSku
          id="expired-discount-select"
          actions={actions}
          selected={selected}
        />
        <SearchSku
          id="expired-discount-search"
          onSearch={actions.setSearchTerm}
          selected={selected}
          setPage={actions.setPage}
        />
      </ControlsLeftContainer>
      <ControlsRightContainer>
       <Button          
          variant="primary"
          onClick={openModal}
          id="newDiscountButton"
          data-id="newDiscountButton"
          disabled={!hasPermissionToCreate}
          size="s"
        >{COMMERCIAL_DISCOUNTS.createBtn}</Button>
      </ControlsRightContainer>
        <NewDiscountPageForm
          closeModal={closeModal}
          open={isOpen}
          key="NewDiscountModal"
          actions={extraActions}
        />
    </ControlsMainWrapper>
  );
}
