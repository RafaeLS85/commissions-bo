import React, { useState } from "react";
import dynamic from "next/dynamic";

// lazy loading:
const BaseLayout = dynamic(() => import("@/components/common/layouts/Base"));
const CCTable = dynamic(
  () =>
    import(
      "@/components/Commissions/SpecialCommissions/CurrentCommissions/Table"
    )
);
const Controls = dynamic(
  () =>
    import(
      "@/components/Commissions/SpecialCommissions/CurrentCommissions/Controls"
    )
);
const ECTable = dynamic(
  () =>
    import(
      "@/components/Commissions/SpecialCommissions/ExpiredCommissions/Table"
    )
);
const ExpiredCommissionControls = dynamic(
  () =>
    import(
      "@/components/Commissions/SpecialCommissions/ExpiredCommissions/Controls"
    )
);

import { TabsComponent } from "@/components/common/Tabs";
import useCurrentCommission from "@/hooks/Commissions/CurrentCommission/useCurrentCommission";
import useExpiredCommission from "@/hooks/Commissions/ExpiredCommission/useExpiredCommission";
import { TableContainer } from "@/components/common/layouts/TableContainer";
import { PAGE_TITLES } from "@/constants";

export default function SpecialCommissionsPage() {
  const title = PAGE_TITLES.specialCommissions.index;

  const [openTab, setOpenTab] = useState(1);
  const { state: currentState, actions: currentActions } =
    useCurrentCommission();
  const { state: expiredState, actions: expiredActions } =
    useExpiredCommission();

  const tabs = [
    {
      id: "current-commission",
      title: "Comisiones vigentes",
      tabNum: 1,
    },
    {
      id: "overdue-commission",
      title: "Comisiones vencidas",
      tabNum: 2,
    },
  ];

  return (
    <BaseLayout title={title}>
      <TableContainer>
        <TabsComponent openTab={openTab} onChangeTab={setOpenTab} tabs={tabs} />
        <span style={{ display: openTab === 1 ? "contents" : "none" }}>
          <Controls
            selected={currentState.selected}
            state={currentState}
            actions={currentActions}
          />
          <CCTable actions={currentActions} state={currentState} />
        </span>
        <span style={{ display: openTab === 2 ? "contents" : "none" }}>
          <ExpiredCommissionControls
            actions={expiredActions}
            selected={expiredState.selected}
          />
          <ECTable actions={expiredActions} state={expiredState} />
        </span>       
      </TableContainer>
    </BaseLayout>
  );
}
