import React, { useState } from "react";
import { COMMERCIAL_DISCOUNTS, formatOptions } from "../utils/constants";
import ExpireDiscountModal from "./Modals/ExpireDiscount";
import { MinusSVG } from "@/components/common/icons/Minus";

import DeleteDiscountModal from "./Modals/DeleteDiscount";
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
import {
  ActionBtn,
  ActionContainer,
} from "@/components/common/Table/Table.styles";
import { TextLabel } from "@/components/common/Table/TextLabel";
import {
  CommercialDiscountActions,
  CommercialDiscountForm,
  CommercialDiscountState,
} from "@/hooks/Discounts/CommercialDiscounts/types";
import { PERMISSIONS } from "@/constants/permissions";
import FormatedNumber from "@/components/common/FormatedNumber";
import FormatedDate from "@/components/common/FormatedDate";
import usePermission from "@/hooks/usePermission";
import { calculateTotalPages, isFuture } from "@/lib/utils";
import { EmptyState } from "@/components/common/EmpyState";
import { EMPTY_STATES } from "@/constants/empty-states";
import { SearchPictogram } from "@/components/common/icons/SearchPictogram";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Tooltip,
} from '@chakra-ui/react';
import { HiOutlineTrash } from "react-icons/hi2";

interface Props {
  state: CommercialDiscountState;
  actions: CommercialDiscountActions;
}

const CurrentDiscountsTable = ({ actions, state }: Props) => {
  // const { modalActions, modalState } = useModals();
  const { discounts, loading, searchTerm } = state;
  const list: CommercialDiscountForm[] = discounts.items;
  const [discountId, setDiscountId] = useState<string>("");
  const { tableLabels } = COMMERCIAL_DISCOUNTS;
  const hasEditPermission = usePermission({
    permission: PERMISSIONS.REBATES_EDIT,
  });

  const handleExpire = (id: string, isFuture: boolean) => {
    setDiscountId(id);
    // if (isFuture) {
    //   modalActions.openDeleteModal();
    // } else {
    //   modalActions.openFormModal();
    // }
  }; 

  const totalPages = calculateTotalPages({
    count: state.discounts.count,
    pageSize: state.pageSize,
  });  

  const { discounts: { description, message } } = EMPTY_STATES;

  if(!list) return;

  if (list.length === 0) {
    return(      
      <EmptyState 
        Icon={SearchPictogram}
        description={description}
        message={message}
      />
    )
  };

  return (
    <span style={{ position: "relative" }}>
      {/* <ExpireDiscountModal
        closeModal={modalActions.closeFormModal}
        open={modalState.openForm}
        key="expireDiscountModal"
        actions={actions}
        id={discountId}
      /> */}
      {/* <DeleteDiscountModal
        closeModal={modalActions.closeDeleteModal}
        open={modalState.openDelete}
        key="deleteDiscountModal"
        actions={actions}
        id={discountId}
      /> */}
      <LoaderOverlay loading={loading}>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
        {/* <TableView
          items={list}
          renderColumns={() => (
            <>
              <Column label={tableLabels.sku} />
              <Column label={tableLabels.discount} />
              <Column label={tableLabels.validFrom} />
              <Column label={tableLabels.validTo} />
              <Column label={tableLabels.seller} />
              <Column label={tableLabels.motive} />
              <Column label={tableLabels.actions} />
            </>
          )}
          renderCells={({
            _id,
            sku,
            discount,
            validFrom,
            validTo,
            seller,
            motive,
            sellerId,
          }) => (
            <>
              <Cell>{sku}</Cell>
              <Cell>
                <FormatedNumber type="currency" value={discount} />
              </Cell>
              <Cell>
                <FormatedDate value={validFrom} options={formatOptions} />
              </Cell>
              <Cell>
                <FormatedDate value={validTo} options={formatOptions} />
              </Cell>
              <Cell>
                <SellerLabel sellerId={sellerId ?? ""} seller={seller ?? ""} />
              </Cell>
              <Cell>
                <TextLabel text={motive} maxLength={20} />
              </Cell>
              <Cell>
                <ActionsButtons
                  _id={_id}
                  hasEditPermission={hasEditPermission}
                  handleExpire={handleExpire}
                  validFrom={validFrom}
                />
              </Cell>
            </>
          )}
          pagination={{
            page: state.page || 1,
            pages: totalPages || 1,
            onChange: actions.setPage,
            total: state.discounts.count,
            maxTotal: 10000,
          }}
        />        */}
      </LoaderOverlay>
    </span>
  );
};

interface ActionButtonsProps {
  hasEditPermission: boolean;
  validFrom: Date;
  _id: string;
  handleExpire: (id: string, isFuture: boolean) => void;
}

const ActionsButtons = ({
  hasEditPermission,
  validFrom,
  _id,
  handleExpire,
}: ActionButtonsProps) => {
  return (
    <>
      {hasEditPermission && (
        <ActionContainer>
          <Tooltip
            title={
              !isFuture(validFrom)
                ? COMMERCIAL_DISCOUNTS.expireBtn
                : COMMERCIAL_DISCOUNTS.clearBtn
            }
          >
            <ActionBtn
              onClick={() => handleExpire(_id, isFuture(validFrom))}
              data-id={!isFuture(validFrom) ? "expireButton" : "deleteButton"}
            >
              {!isFuture(validFrom) ? <MinusSVG /> : <HiOutlineTrash />}
            </ActionBtn>
          </Tooltip>
        </ActionContainer>
      )}
    </>
  );
};

export default CurrentDiscountsTable;
