import dynamic from "next/dynamic";
import BaseLayout from "@/components/common/layouts/Base";
import { TableContainer } from "@/components/common/layouts/TableContainer";
import { PAGE_TITLES } from "@/constants";
import CategoriesControls from "@/components/Categories/Controls";
import { useCategories } from "@/hooks/Categories/useCategories";
import CategoriesPage from "@/components/Categories";

export default function Categories() {
  const title = PAGE_TITLES.baseCommissions.categories;
  const { state, actions } = useCategories();

  return (
    <BaseLayout title={title}>
      <TableContainer>
        <CategoriesControls state={state} actions={actions} />
        <CategoriesPage state={state} actions={actions} key={state.page} />
      </TableContainer>     
    </BaseLayout>
  );
}
