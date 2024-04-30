import React from "react";
import FormatedDate from "@/components/common/FormatedDate";
import FormatedNumber from "@/components/common/FormatedNumber";
import { COMMERCIAL_DISCOUNTS, formatOptions } from "../utils/constants";
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
import { TextLabel } from "@/components/common/Table/TextLabel";
import {
  CommercialDiscountForm,
  CommercialDiscountState,
  ExpiredDiscountActions,
} from "@/hooks/Discounts/CommercialDiscounts/types";
import { calculateTotalPages } from "@/lib/utils";
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
} from '@chakra-ui/react'

interface Props {
  state: CommercialDiscountState;
  actions: ExpiredDiscountActions;
}

const ExpiredDiscountsTable = ({ state, actions }: Props) => {
  const { discounts, loading, searchTerm } = state;
  const list: CommercialDiscountForm[] = discounts.items;

  const { tableLabels } = COMMERCIAL_DISCOUNTS;  

  const totalPages = calculateTotalPages({
    count: state.discounts.count,
    pageSize: state.pageSize,
  });

  const { discounts: { description, message } } = EMPTY_STATES;

  if (!list) return;

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
              <Column label={tableLabels.inactiveReason} />
            </>
          )}
          renderCells={({            
            sku,
            discount,
            validFrom,
            validTo,
            seller,
            motive,
            sellerId,
            inactiveReason,
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
                <TextLabel text={inactiveReason ?? ""} maxLength={20} />
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
        /> */}
      </LoaderOverlay>
    </span>
  );
};

export default ExpiredDiscountsTable;
