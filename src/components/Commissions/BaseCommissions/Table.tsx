import React, { useState } from "react";
import {
  BaseCommissionActions,
  BaseCommissionState,
} from "@/hooks/Commissions/BaseCommissions/types";
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import FormatedNumber from "@/components/common/FormatedNumber";
import FormatedDate from "@/components/common/FormatedDate";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
import styled from "styled-components";
import { formatOptions } from "@/constants";
import { useEditableTable } from "./hooks/useEditableTable";
import {
  UseFormGetValues,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import { PercentInput } from "./form/PercentInput";
import { MdOutlineCancel, MdOutlineSave } from "react-icons/md";
import CancelModal from "@/components/common/ActionModals/CancelModal";
import { calculateTotalPages } from "@/lib/utils";
import { BASE_COMMISSIONS_TABLE } from "@/constants/commissions";
import {
  ActionContainer,
  ErrorMessage,
} from "@/components/common/Table/Table.styles";
import { EditableTableActions } from "./hooks/types";
import DeleteSellerModal from "@/components/common/ActionModals/DeleteSellerModal";
import { BaseCommission } from "@/types/commissions";
import { EMPTY_STATES } from "@/constants/empty-states";
import { SearchPictogram } from "@/components/common/icons/SearchPictogram";
import { EmptyState } from "@/components/common/EmpyState";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { MdOutlineModeEdit } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi2";

const ActionBtn = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

interface Props {
  state: BaseCommissionState;
  actions: BaseCommissionActions;
}

const BaseCommissionTable = ({ actions, state }: Props) => {
  const [openCancelModal, setOpenCancelModal] = React.useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const hasPermissionToWrite = usePermission({
    permission: PERMISSIONS.COMMISSION_WRITE,
  });

  const [deleteId, setDeleteId] = useState<string>("");

  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm<{ rate: number }>();
  const { errors, isDirty, isValid, isSubmitSuccessful, isSubmitting } =
    formState;

  const { commissions, loading, searchTerm } = state;
  const { items } = commissions;

  const { state: editableTableState, actions: editableTableActions } =
    useEditableTable({ reset, isDirty, actions, setOpenCancelModal });

  const { th_actions, th_commission, th_lastUpdateDate, th_seller } =
    BASE_COMMISSIONS_TABLE.headers;

  const totalPages = calculateTotalPages({
    count: state.commissions.count,
    pageSize: state.pageSize,
  });

  const handleDelete = (id: string) => {
    setDeleteId(id);
    setOpenDeleteModal(true);
  };

  const {
    base_commissions: { description, message },
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
      <CancelModal
        closeModal={() => setOpenCancelModal(false)}
        open={openCancelModal}
        reset={reset}
        setActive={editableTableActions.setActiveEdit}
      />
      <DeleteSellerModal
        closeModal={() => setOpenDeleteModal(false)}
        open={openDeleteModal}
        handleDelete={actions.deleteCommission}
        id={deleteId}
        setDeleteId={setDeleteId}
      />
      <LoaderOverlay loading={loading}>
        {/* <TableView
          items={items}
          renderColumns={() => (
            <>
              <Column label={th_seller} />
              <Column label={th_commission} />
              <Column label={th_lastUpdateDate} />
              <Column label={th_actions} />
            </>
          )}
          renderCells={({
            _id,
            defaultCommission,
            sellerId,
            lastUpdate,
            seller,
          }) => {
            const enableEditing = editableTableState.activeEdit === _id;           
            return (
              <>
                <Cell>
                  <SellerLabel
                    seller={seller}
                    sellerId={sellerId}
                    maxLength={45}
                  />
                </Cell>
                <Cell>
                  {enableEditing ? (
                    <>
                      <PercentInput register={register} _id={_id} />
                      <ErrorMessage>{errors.rate?.message}</ErrorMessage>
                    </>
                  ) : (
                    <FormatedNumber
                      type="percent"
                      value={defaultCommission / 100}
                    />
                  )}
                </Cell>
                <Cell>
                  <FormatedDate value={lastUpdate} options={formatOptions} />
                </Cell>
                <Cell>
                  <ActionButtons
                    _id={_id}
                    defaultCommission={defaultCommission}
                    editableTableActions={editableTableActions}
                    enableEditing={enableEditing}
                    getValues={getValues}
                    handleSubmit={handleSubmit}
                    hasPermissionToWrite={hasPermissionToWrite}
                    isSubmitting={isSubmitting}
                    handleDelete={handleDelete}
                    row={{
                      _id,
                      defaultCommission,
                      lastUpdate,
                      seller,
                      sellerId,
                    }}
                  />
                </Cell>
              </>
            );
          }}
          pagination={{
            page: state.page || 1,
            pages: totalPages || 1,
            onChange: actions.setPage,
            total: state.commissions.count,
            maxTotal: 10000,
          }}
        /> */}
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
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
      </LoaderOverlay>
    </span>
  );
};

interface ActionButtonsProps {
  hasPermissionToWrite: boolean;
  editableTableActions: EditableTableActions;
  _id: string;
  defaultCommission: number;
  enableEditing: boolean;
  isSubmitting: boolean;
  getValues: UseFormGetValues<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  handleDelete: (id: string, sku?: string) => void;
  row: BaseCommission;
}

const ActionButtons = ({
  hasPermissionToWrite,
  editableTableActions,
  _id,
  defaultCommission,
  enableEditing,
  isSubmitting,
  getValues,
  handleSubmit,
  handleDelete,
  row,
}: ActionButtonsProps) => {
  return (
    <>
      {hasPermissionToWrite && (
        <ActionContainer>
          {!enableEditing && (
            <>
              <Tooltip title="Editar">
                <ActionBtn
                  onClick={() =>
                    editableTableActions.handleEdit({
                      _id,
                      rate: defaultCommission,
                    })
                  }
                  disabled={isSubmitting}
                  data-id="editButton"
                >
                  <MdOutlineModeEdit size="l" />
                </ActionBtn>
              </Tooltip>
              <Tooltip title="Eliminar">
                <ActionBtn
                  onClick={() => handleDelete(row._id, row.seller)}
                  disabled={isSubmitting}
                  data-id="deleteButton"
                >
                  <HiOutlineTrash size="l" />
                </ActionBtn>
              </Tooltip>
            </>
          )}

          {enableEditing && (
            <>
              <Tooltip title="Guardar">
                <ActionBtn
                  onClick={handleSubmit(() =>
                    editableTableActions.onSubmit({
                      sellerId: _id,
                      rate: getValues("rate"),
                    })
                  )}
                  disabled={isSubmitting}
                  data-id="saveButton"
                >
                  <MdOutlineSave
                    size={20}
                    style={{
                      marginRight: "0.4rem",
                      marginLeft: "0.4rem",
                    }}
                  />
                </ActionBtn>
              </Tooltip>

              <Tooltip title="Cancelar">
                <ActionBtn
                  onClick={editableTableActions.handleCancelBtn}
                  disabled={isSubmitting}
                  data-id="cancelButton"
                >
                  <MdOutlineCancel size={20} />
                </ActionBtn>
              </Tooltip>
            </>
          )}
        </ActionContainer>
      )}
    </>
  );
};

export default BaseCommissionTable;
