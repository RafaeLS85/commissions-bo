import React from "react";
import dynamic from "next/dynamic";
import BaseLayout from "@/components/common/layouts/Base";
import { useCommissionDefault } from "@/hooks/Commissions/CommissionDefault/useCommissionDefault";
import { PAGE_TITLES } from "@/constants";
const DefaultCommissionsForm = dynamic(() => import('@/components/Commissions/DefaultCommissions'), { ssr: false });
// import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function CommissionDefaultPage() {
  const title = PAGE_TITLES.baseCommissions.default;
  const { state, actions } = useCommissionDefault();

  return (
    <BaseLayout title={title}>
      <DefaultCommissionsForm state={state} actions={actions} />      
    </BaseLayout>
  );
}

// get the data from the server side:

// type PageProps = {
//   _id: string,
//   defaultCommission: number,
//   userId: string,
//   creationDate: Date
// }

// export const getServerSideProps = (async (context) => {
//   const API_URL = process.env.COMMISSION_SERVICE;
//   const url = `${API_URL}/default/current`;

//   let token = context.req.headers.cookie || ""
//   token = token.split("=")[1];

//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${token}`,
//     },
//   })
//   const commissionDefault: PageProps = await res.json()
//   console.log("commissionDefault", commissionDefault)
//   // Pass data to the page via props
//   return { props: { data: commissionDefault } }
// }) satisfies GetServerSideProps<{ data: PageProps }>
