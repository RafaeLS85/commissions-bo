import { updateCategories } from "./utils";
import { ArrowIcon } from "./ArrowIcon";
import { Category } from "@/types/categories";
import styled from "styled-components";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

interface MainContainerProps {
  count: number | null | undefined;
}
const MainContainer = styled.span<MainContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: ${(props) => (props.count === null ? "default" : "pointer")};
`;

const ArrowIconContainer = styled.span`
  display: flex;
  align-items: center;
  /* padding: 0.75rem;   */
  padding: 0 8px 0 12px;
`;


const Title = styled.h3`
  font-family: Work Sans;
  color: #242433;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

interface SubcategoryProps {
  parentId: string | null;
}
const Subcategory = styled.span<SubcategoryProps>`
  font-family: Roboto;
  font-weight: ${(props) => (props.parentId === null ? "600" : "400")};
  font-size: 14px;
  line-height: 20px;
`;

const Root = ({
  item,
  handleClick,
  showChildren,
  categories,
  setCategories,
}: {
  item: Category;
  handleClick: () => void;
  showChildren: boolean;
  categories: Category[];
  setCategories: (item: Category[]) => void;
}) => {
  const handleCheck = (item: Category) => {
    setCategories(updateCategories(categories, item));
  };

  return (
    <MainContainer onClick={handleClick} count={item.count}>
      <span
        style={{ display: "flex", alignItems: "center", padding: ".75rem" }}
      >
        {/* <Checkbox
          id="categories_checkbox"
          checked={item.isChecked}
          onChange={() => handleCheck(item)}
        /> */}

      <Checkbox
          isChecked={item.isChecked}
          onChange={() => handleCheck(item)}
        />


        <Title>
          <span>
            <Subcategory parentId={item.parentId}>
              {item.label} {item.count !== null ? `(${item.count})` : ""}
            </Subcategory>
          </span>
        </Title>
        <ArrowIconContainer
          style={{ visibility: item.parentId ? "visible" : "hidden" }}
        >
          <ArrowIcon show={showChildren} item={item} />
        </ArrowIconContainer>
      </span>
      <ArrowIconContainer
        style={{ visibility: item.parentId ? "hidden" : "visible" }}
      >
        <ArrowIcon show={showChildren} item={item} />
      </ArrowIconContainer>
    </MainContainer>
  );
};

export default Root;
