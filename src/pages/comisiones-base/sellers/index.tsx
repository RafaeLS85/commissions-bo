import dynamic from "next/dynamic";
import BaseLayout from "@/components/common/layouts/Base";
import { TableContainer } from "@/components/common/layouts/TableContainer";
const BaseCommissionTable = dynamic(() => import('@/components/Commissions/BaseCommissions/Table'));
const BaseCommissionControls = dynamic(() => import('@/components/Commissions/BaseCommissions/Controls'));
import { useBaseCommissions } from "@/hooks/Commissions/BaseCommissions/useBaseCommissions";
import { PAGE_TITLES } from "@/constants";

export default function Home() {

  const title = PAGE_TITLES.baseCommissions.index;
  const { state, actions } = useBaseCommissions();    

  return (
    <BaseLayout title={title}>
      <TableContainer>
        <BaseCommissionControls 
          state={state}         
          actions={actions}
        />
        <BaseCommissionTable state={state} actions={actions} key={state.page} />                             
      </TableContainer>        
    </BaseLayout>
  );
}
