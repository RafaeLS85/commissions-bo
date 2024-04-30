import React, { useState } from "react";
import dynamic from "next/dynamic";
const NewDiscountPageForm = dynamic(() => import("../NewDiscount"));
import { COMMERCIAL_DISCOUNTS } from "../utils/constants";
import {
  CommercialDiscountActions,
  CommercialDiscountState,
} from "@/hooks/Discounts/CommercialDiscounts/types";
import { PERMISSIONS } from "@/constants/permissions";
import usePermission from "@/hooks/usePermission";
import {
  ControlsLeftContainer,
  ControlsMainWrapper,
  ControlsRightContainer,
} from "@/components/common/Controls.styles";
import { SelectSku } from "@/components/common/SelectSku";
import SearchSku from "@/components/common/SearchSku";
import { Button } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";

interface Props {
  selected: any;
  state: CommercialDiscountState;
  actions: CommercialDiscountActions;
}

export default function CurrentDiscountControls({
  selected,
  actions,
  state,
}: Props) {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { downloading } = state;
  // const { actions: actionsAlerts, state: stateAlerts } = useAlerts();
  const hasPermissionToCreate = usePermission({
    permission: PERMISSIONS.REBATES_CREATE,
  }); 

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ControlsMainWrapper>
      <ControlsLeftContainer>
        <SelectSku
          id="current-discount-select"
          actions={actions}
          selected={selected}
        />
        <SearchSku
          id="current-discount-search-input"
          onSearch={actions.setSearchTerm}
          setPage={actions.setPage}
          selected={selected}
        />
      </ControlsLeftContainer>
      <ControlsRightContainer>
        <Button
          
          variant="tertiary"
          onClick={() => {
            !downloading ? actions.downloadReport() : false;
          }}
          data-id="discountReportButton"
          id="discountReportButton"
          rightIcon={<MdOutlineFileDownload />}
          isLoading={downloading}
          size="s"
        >{COMMERCIAL_DISCOUNTS.reportBtn}</Button>
        <Button          
          variant="primary"
          onClick={openModal}
          id="newDiscountButton"
          data-id="newDiscountButton"
          // disabled={!hasPermissionToCreate}
          size="s"
        >{COMMERCIAL_DISCOUNTS.createBtn}</Button>
      </ControlsRightContainer>
      <NewDiscountPageForm
        closeModal={closeModal}
        open={isOpen}
        key="NewDiscountModal"
        actions={actions}
      />
    </ControlsMainWrapper>
  );
}
