import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  ActionBtn,
  ActionContainer,
  ErrorMessage,
} from "@/components/common/Table/Table.styles";
import FormatedDate from "@/components/common/FormatedDate";
import FormatedNumber from "@/components/common/FormatedNumber";
import { UseFormHandleSubmit, useForm } from "react-hook-form";
import { MdOutlineCancel, MdOutlineSave } from "react-icons/md";

import { PercentInput } from "./form/PercentInput";
import { ValidFromInput, ValidToInput } from "./form/DateInput";
import { useEditableTable } from "./hooks/useEditableTable";
import {
  Commissions,
  CurrentCommissionActions,
  CurrentCommissionState,
  UpdateCommission,
} from "@/hooks/Commissions/CurrentCommission/types";
import { formatOptions } from "../utils/constants";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
const ModalContainer = dynamic(
  () => import("@/components/common/ActionModals/Container")
);
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
import { type CurrentCommissionForm } from "@/types/commissions";
import { useModals } from "@/hooks/useModals";
import { calculateTotalPages, isFuture } from "@/lib/utils";
import { EditableTableActions } from "./hooks/types";
import { COMMISSIONS_TABLE } from "@/constants/commissions";
import { EmptyState } from "@/components/common/EmpyState";
import { SearchPictogram } from "@/components/common/icons/SearchPictogram";
import { EMPTY_STATES } from "@/constants/empty-states";
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
} from "@chakra-ui/react";

interface Props {
  actions: CurrentCommissionActions;
  state: CurrentCommissionState;
}

const CurrentCommissionTable = ({ actions, state }: Props) => {
  const { modalActions, modalState } = useModals();
  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm<CurrentCommissionForm>();
  const { errors, isDirty, isValid, isSubmitSuccessful, isSubmitting } =
    formState;

  const { currentCommissions, loading, searchTerm } = state;
  const { items } = currentCommissions;

  const [deleteId, setDeleteId] = useState<string>("");

  const {
    th_commission,
    th_lastUpdateDate,
    th_seller,
    th_sku,
    th_validFrom,
    th_validTo,
    th_actions,
  } = COMMISSIONS_TABLE.headers;

  const { state: editableTableState, actions: editableTableActions } =
    useEditableTable({
      isDirty,
      modalActions,
      reset,
      currentCommissionState: state,
      currentCommissionActions: actions,
    });

  const handleDelete = (id: string, sku?: string) => {
    setDeleteId(id);
    editableTableActions.setDeleteSku(sku);
    modalActions.openModal();
  };

  const hasPermission = usePermission({
    permission: PERMISSIONS.COMMERCIAL_COMMISSION_WRITE,
  });

  const totalPages = calculateTotalPages({
    count: state.currentCommissions.count,
    pageSize: state.pageSize,
  });

  const {
    commercial_commissions: { description, message },
  } = EMPTY_STATES;

  if (!items) return;

  if (items.length === 0) {
    return (
      <EmptyState
        Icon={SearchPictogram}
        description={description}
        message={message}
      />
    );
  }

  return (
    <span style={{ position: "relative" }}>
      <ModalContainer
        actions={editableTableActions}
        getValues={getValues}
        modalActions={modalActions}
        modalState={modalState}
        reset={reset}
        state={editableTableState}
        deleteId={deleteId}
        setDeleteId={setDeleteId}
      />

      <LoaderOverlay loading={loading}>
        <TableContainer>
          <Table variant="simple">
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
          items={items}
          renderColumns={() => (
            <>
              <Column label={th_sku} />
              <Column label={th_commission} />
              <Column label={th_validFrom} />
              <Column label={th_validTo} />
              <Column label={th_seller} />
              <Column label={th_lastUpdateDate} />
              <Column label={th_actions} />
            </>
          )}
          renderCells={({
            _id,
            sku,
            rate,
            validFrom,
            validTo,
            seller,
            sellerId,
            lastUpdateDate,
          }) => {
            const enableEditing = editableTableState.activeEdit === _id;
            const isFutureCommission = isFuture(validFrom);

            return (
              <>
                <Cell>{sku}</Cell>
                <Cell>
                  {enableEditing ? (
                    <>
                      <PercentInput register={register} _id={_id} />
                      <ErrorMessage>{errors.rate?.message}</ErrorMessage>
                    </>
                  ) : (
                    <FormatedNumber type="percent" value={rate / 100} />
                  )}
                </Cell>
                <Cell>
                  {isFutureCommission && enableEditing ? (
                    <>
                      <ValidFromInput register={register} _id={_id} />
                      <ErrorMessage>{errors.validFrom?.message}</ErrorMessage>
                    </>
                  ) : (
                    <FormatedDate value={validFrom} options={formatOptions} />
                  )}
                </Cell>
                <Cell>
                  {enableEditing ? (
                    <>
                      <ValidToInput
                        register={register}
                        _id={_id}
                        getValues={getValues}
                        isFutureCommission={isFutureCommission}
                        validFrom={validFrom}
                      />
                      <ErrorMessage>{errors.validTo?.message}</ErrorMessage>
                    </>
                  ) : (
                    <FormatedDate value={validTo} options={formatOptions} />
                  )}
                </Cell>
                <Cell>
                  <SellerLabel sellerId={sellerId} seller={seller} />
                </Cell>
                <Cell>
                  <FormatedDate
                    value={lastUpdateDate}
                    options={formatOptions}
                  />
                </Cell>
                <Cell>
                  <ActionButtons
                    actions={editableTableActions}
                    enableEditing={enableEditing}
                    handleDelete={() => handleDelete( _id, sku) }
                    handleSubmit={handleSubmit}
                    hasPermission={hasPermission}
                    isFutureCommission={isFutureCommission}
                    isSubmitting={isSubmitting}
                    row={{ _id, rate, validTo, validFrom, sku }}
                  />
                </Cell>
              </>
            );
          }}
          pagination={{
            page: state.page || 1,
            pages: totalPages || 1,
            onChange: actions.setPage,
            total: state.currentCommissions.count,
            maxTotal: 10000,
          }}
        />        */}
      </LoaderOverlay>
    </span>
  );
};

interface ActionButtonsProps {
  hasPermission: boolean;
  enableEditing: boolean;
  actions: EditableTableActions;
  handleSubmit: UseFormHandleSubmit<any>;
  isSubmitting: boolean;
  isFutureCommission: boolean;
  handleDelete: (id: string, sku?: string) => void;
  row: {
    _id: string;
    rate: number;
    validTo: Date;
    validFrom: Date;
    sku?: string;
  };
}

// const ActionButtons = ({
//   hasPermission,
//   enableEditing,
//   actions,
//   handleSubmit,
//   isSubmitting,
//   isFutureCommission,
//   handleDelete,
//   row,
// }: ActionButtonsProps) => {
//   return (
//     <>
//       {hasPermission && (
//         <ActionContainer>
//           {!enableEditing && (
//             <>
//               <Tooltip title="Editar">
//                 <ActionBtn
//                   onClick={() =>
//                     actions.handleEdit({
//                       _id: row._id,
//                       rate: row.rate,
//                       validTo: row.validTo,
//                       validFrom: row.validFrom,
//                       isFutureCommission,
//                     })
//                   }
//                   disabled={isSubmitting}
//                   data-id="editButton"
//                 >
//                   <EditIcon size="l" />
//                 </ActionBtn>
//               </Tooltip>
//               {isFutureCommission && (
//                 <Tooltip title="Eliminar">
//                   <ActionBtn
//                     onClick={() => handleDelete(row._id, row.sku)}
//                     disabled={isSubmitting}
//                     data-id="deleteButton"
//                   >
//                     <TrashIcon size="l" />
//                   </ActionBtn>
//                 </Tooltip>
//               )}
//             </>
//           )}

//           {enableEditing && (
//             <>
//               <Tooltip title="Guardar">
//                 <ActionBtn
//                   onClick={handleSubmit(actions.onSubmit)}
//                   disabled={isSubmitting}
//                   data-id="saveButton"
//                 >
//                   <MdOutlineSave
//                     size={20}
//                     style={{
//                       marginRight: "0.4rem",
//                       marginLeft: "0.4rem",
//                     }}
//                   />
//                 </ActionBtn>
//               </Tooltip>

//               <Tooltip title="Cancelar">
//                 <ActionBtn
//                   onClick={actions.handleCancelBtn}
//                   disabled={isSubmitting}
//                   data-id="cancelButton"
//                 >
//                   <MdOutlineCancel size={20} />
//                 </ActionBtn>
//               </Tooltip>
//             </>
//           )}
//         </ActionContainer>
//       )}
//     </>
//   );
// };

export default CurrentCommissionTable;
