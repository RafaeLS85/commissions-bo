import { useState } from "react";
import Root from "./Root";
import { SubCategory } from "./SubCategory";
import { Category } from "@/types/categories";
import styled from "styled-components";

interface ContainerProps {
  parentId: string | null;
  isLastElement?: boolean;
}
const Container = styled.div<ContainerProps>`
  display: flex; 
  /* gap: 1rem; */
  flex-direction: column;
  ${({ parentId }) => parentId === null && "border-bottom: 1px solid #D5D5E7;"}
  ${({ isLastElement }) => isLastElement && "border-bottom: none;"}
`;


interface Props {
  item: Category;
  setCategories: (categories: Category[]) => void;
  categories: Category[];
  isLastElement?: boolean;
}

export default function TreeItem({ item, setCategories, categories, isLastElement }: Props) {
  const [showChildren, setShowChildren] = useState(false);

  const handleClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <Container parentId={item.parentId} isLastElement={isLastElement}>
      {/* {JSON.stringify({isLastElement})} */}
      <Root
        handleClick={handleClick}
        item={item}
        showChildren={showChildren}
        setCategories={setCategories}
        categories={categories}
      />
      <SubCategory>
        {showChildren &&
          item.subcategory.map((category) => (
            <TreeItem
              item={category}
              key={category.id}
              setCategories={setCategories}
              categories={categories}
            />
          ))}
      </SubCategory>
    </Container>
  );
}
