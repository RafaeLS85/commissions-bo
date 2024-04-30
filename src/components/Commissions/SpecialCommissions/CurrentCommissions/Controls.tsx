import React from "react";
import dynamic from "next/dynamic";
const ModalPageForm = dynamic(() => import("../NewCommission/ModalPageForm"));
import usePermission from "@/hooks/usePermission";
import { COMMISSION_EXCEPTIONS } from "../utils/constants";
import { PERMISSIONS } from "@/constants/permissions";
import { CurrentCommissionActions, CurrentCommissionState } from "@/hooks/Commissions/CurrentCommission/types";
import { i18n } from "@/constants/commissions/legacy_i18n";
import { ControlsLeftContainer, ControlsMainWrapper, ControlsRightContainer } from "@/components/common/Controls.styles";
import { SelectSku } from "@/components/common/SelectSku";
import SearchSku from "@/components/common/SearchSku";
import { Button } from "@chakra-ui/react";
import { MdOutlineFileDownload } from "react-icons/md";

interface Props {
  selected: any;
  state: CurrentCommissionState;
  actions: CurrentCommissionActions;
}

export default function CurrentCommissionControls({ selected, actions, state }: Props) { 

  // const { modalActions, modalState } = useModals();
  // const { actions: actionsAlerts, state: stateAlerts } = useAlerts();
  const { downloading } = state;
  const hasPermissionToCreate = usePermission({
    permission: PERMISSIONS.COMMERCIAL_COMMISSION_WRITE
  }); 

  return (
    <ControlsMainWrapper>
      <ControlsLeftContainer>
        <SelectSku 
          id="current-commission-select"
          actions={actions}
          selected={selected}       
        />       
        <SearchSku
          id="current-commission-search-input"
          onSearch={actions.setSearchTerm}
          setPage={actions.setPage}
          selected={selected}
        />
      </ControlsLeftContainer>
      <ControlsRightContainer>
        <Button
          id="discountReportButton"          
          variant="tertiary"
          onClick={() => { !downloading ? actions.downloadReport() : false }}
          data-id="discountReportButton"
          rightIcon={<MdOutlineFileDownload />}
          isLoading={downloading}
          size="s"
        >{COMMISSION_EXCEPTIONS.reportBtn}</Button>
        <Button
          id="newCommissionButton"         
          variant="primary"
          onClick={() => {}}
          data-id="newCommissionButton"
          disabled={!hasPermissionToCreate}
          size="s"
        >{i18n["sellerCommission.new"]}</Button>
        <ModalPageForm
          closeModal={() => {}}
          open={false}
          key="NewCommissionModal"
          actions={actions}
        />
      </ControlsRightContainer>      
    </ControlsMainWrapper>
  );
}
