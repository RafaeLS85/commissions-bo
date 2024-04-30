import React from "react";
import FormatedDate from "@/components/common/FormatedDate";
import FormatedNumber from "@/components/common/FormatedNumber";
import { Commissions } from "@/hooks/Commissions/CurrentCommission/types";
import { formatOptions } from "../utils/constants";
import {
  ExpiredCommissionActions,
  ExpiredCommissionState,
} from "@/hooks/Commissions/ExpiredCommission/types";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import { calculateTotalPages } from "@/lib/utils";
import { COMMISSIONS_TABLE } from "@/constants/commissions";
import { EMPTY_STATES } from "@/constants/empty-states";
import { EmptyState } from "@/components/common/EmpyState";
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
} from "@chakra-ui/react";

interface Props {
  actions: ExpiredCommissionActions;
  state: ExpiredCommissionState;
}

const ExpiredCommissionTable = ({ actions, state }: Props) => {
  const { expiredCommissions, loading, searchTerm } = state;
  const commissions: Commissions[] = expiredCommissions.items;

  const {
    th_commission,
    th_lastUpdateDate,
    th_seller,
    th_validFrom,
    th_validTo,
    th_sku,
  } = COMMISSIONS_TABLE.headers;

  const totalPages = calculateTotalPages({
    count: state.expiredCommissions.count,
    pageSize: state.pageSize,
  });

  const {
    commercial_commissions: { description, message },
  } = EMPTY_STATES;

  if (!commissions) return;

  if (commissions.length === 0) {
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
          items={commissions}
          renderColumns={() => (
            <>
              <Column label={th_sku} />
              <Column label={th_commission} />
              <Column label={th_validFrom} />
              <Column label={th_validTo} />
              <Column label={th_seller} />
              <Column label={th_lastUpdateDate} />
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
          }) => (
            <>
              <Cell>{sku}</Cell>
              <Cell>
                <FormatedNumber type="percent" value={rate / 100} />
              </Cell>
              <Cell>
                <FormatedDate value={validFrom} options={formatOptions} />
              </Cell>
              <Cell>
                <FormatedDate value={validTo} options={formatOptions} />
              </Cell>
              <Cell>
                <SellerLabel sellerId={sellerId} seller={seller} />
              </Cell>
              <Cell>
                <FormatedDate value={lastUpdateDate} options={formatOptions} />
              </Cell>
            </>
          )}
          pagination={{
            page: state.page || 1,
            pages: totalPages || 1,
            onChange: actions.setPage,
            total: state.expiredCommissions.count,
            maxTotal: 10000,
          }}
        />        */}
      </LoaderOverlay>
    </span>
  );
};

export default ExpiredCommissionTable;
