import React from "react";
import BaseLayout from "@/components/common/layouts/Base";
import ChargePage from "@/components/MassiveCharge";
import { PAGE_TITLES } from "@/constants";

const MassiveChargePage = () => { 

  const title = PAGE_TITLES.massiveCharge;

  return (
    <BaseLayout title={title}>  
      <ChargePage />      
    </BaseLayout>
  );
};

export default MassiveChargePage;
