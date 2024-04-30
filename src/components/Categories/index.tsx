import React from "react";
import LoaderOverlay from "@/components/common/Table/LoaderOverlay";
import FormatedNumber from "@/components/common/FormatedNumber";
import FormatedDate from "@/components/common/FormatedDate";
import { SellerLabel } from "@/components/common/Table/SellerLabel";
import usePermission from "@/hooks/usePermission";
import { PERMISSIONS } from "@/constants/permissions";
import { formatOptions } from "@/constants";
import { useForm } from "react-hook-form";
import { calculateTotalPages } from "@/lib/utils";
import { BASE_COMMISSIONS_TABLE } from "@/constants/commissions";
import { EmptyState } from "../common/EmpyState";
import { EmptyCard } from "../common/icons/CardEmpty";
import { EMPTY_STATES } from "@/constants/empty-states";
import styled from "styled-components";
import { TreeList } from "./Tree/TreeList";

// const Container = styled.div`
//     border: 1px solid gray;
//     border-radius: 16px;
// `;

interface Props {
  state: any;
  actions: any;
}

const CategoriesPage = ({ actions, state }: Props) => {
  const hasPermissionToWrite = usePermission({
    permission: PERMISSIONS.COMMISSION_WRITE,
  });

  const { register, handleSubmit, formState, reset, control, getValues } =
    useForm<{ rate: number }>();
  const { errors, isDirty, isValid, isSubmitSuccessful, isSubmitting } =
    formState;

  const { categories, loading, searchTerm } = state;
  const { items } = categories;

  const { th_actions, th_commission, th_lastUpdateDate, th_seller } =
    BASE_COMMISSIONS_TABLE.headers;

  const totalPages = calculateTotalPages({
    count: state.categories.count,
    pageSize: state.pageSize,
  });

  const {categories: { description, message }} = EMPTY_STATES;
  
  // https://www.figma.com/file/jUd0nwAduBg2YkxmIdtMxz/branch/0E3QzcnEy11xrEo8aOkura/Comisiones?type=design&node-id=5212-1650&mode=design&t=LcxwcBA0UmqAGDjW-0

  if(!items) return;

  //FIX: show empty state only if there are items and not loading
  if (items.length === 0) { 
    return (
      <EmptyState 
        Icon={EmptyCard}
        description={description}
        message={message}
      />
    )
  };

  return (
    <span style={{ position: "relative" }}> 
     {/* {JSON.stringify(loading)}     
     {JSON.stringify(items)}      */}
      <LoaderOverlay loading={loading} >
       <div>
           <TreeList list={items} /> 
       </div>
      </LoaderOverlay>
    </span>
  );
};

export default CategoriesPage;









// const ROOT_CATEGORY_ID = '0';

// // Converts the responses json to a tree structure.
// // This can be done in a saga if it was fetched from an API.
// const structuredCategories = convertToTree(responses.data.categories, ROOT_CATEGORY_ID);

// /**
//  * Main app component.
//  * Renders the rest of the application.
//  */
// function App() {
//   return <Checklist categories={structuredCategories} />;
// }

