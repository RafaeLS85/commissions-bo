import React, { useState } from "react";
import dynamic from 'next/dynamic'
import { TabsComponent } from "@/components/common/Tabs";

// lazy loading:
const CurrentDiscountsTable = dynamic(() => import('@/components/Discounts/CommercialDiscounts/CurrentDiscounts/Table'));
const CurrentDiscountControls = dynamic(() => import('@/components/Discounts/CommercialDiscounts/CurrentDiscounts/Controls'));
const ExpiredDiscountsTable = dynamic(() => import('@/components/Discounts/CommercialDiscounts/ExpiredDiscounts/Table'));
const ExpiredDiscountControls = dynamic(() => import('@/components/Discounts/CommercialDiscounts/ExpiredDiscounts/Controls'));

import useCurrentDiscount from "@/hooks/Discounts/CommercialDiscounts/CurrentDiscounts/useCurrentDiscount";
import useExpiredDiscount from "@/hooks/Discounts/CommercialDiscounts/ExpiredDiscounts/useExpiredDiscount";
import BaseLayout from "@/components/common/layouts/Base";
import { TableContainer } from "@/components/common/layouts/TableContainer";
import { PAGE_TITLES } from "@/constants";

export default function CommercialDiscountsPage() {

  const title = PAGE_TITLES.discounts

  const [openTab, setOpenTab] = useState(1);
  const { state: currentDiscountState, actions: currentDiscountActions } =
    useCurrentDiscount();
  const { state: expiredDiscountState, actions: expiredDiscountActions } =
    useExpiredDiscount();

  const tabs = [
    {
      id: "current-discount",
      title: "Descuentos vigentes",
      tabNum: 1,
    },
    {
      id: "overdue-discount",
      title: "Descuentos vencidos",
      tabNum: 2,
    },
  ];   

  return (
    <BaseLayout title={title}>
      <TableContainer>
        <TabsComponent openTab={openTab} onChangeTab={setOpenTab} tabs={tabs} />
        <span style={{ display: openTab === 1 ? "contents" : "none" }}>
          <CurrentDiscountControls
            selected={currentDiscountState.selected}
            state={currentDiscountState}
            actions={currentDiscountActions}
          />
          <CurrentDiscountsTable
            actions={currentDiscountActions}
            state={currentDiscountState}
          />          
        </span>
        <span style={{ display: openTab === 2 ? "contents" : "none" }}>
          <ExpiredDiscountControls
            actions={expiredDiscountActions}
            selected={expiredDiscountState.selected}
            extraActions={currentDiscountActions}
          />
          <ExpiredDiscountsTable            
            state={expiredDiscountState}
            actions={expiredDiscountActions}
          />         
        </span>       
      </TableContainer>
    </BaseLayout>
  );
}
