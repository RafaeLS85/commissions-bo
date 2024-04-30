import { useState } from "react";
import TreeItem from "./TreeItem";
import styled from "styled-components";
import { filterUserSelectedCategories } from "./utils";
import { Category } from "@/types/categories";

const TreeContainer = styled.div`
  border: 1px solid #D5D5E7;
  /* padding: 1rem; */
  border-radius: 12px;  
`;

export const TreeList = ({ list }: { list: Category[] }) => {  

  const [categories, setCategories] = useState(list);
  return (
    <main>
      <TreeContainer>
        {categories.map((item, index) => (
          <TreeItem
            item={item}
            key={item.id}
            setCategories={setCategories}
            categories={categories}
            isLastElement={ index === categories.length - 1 }
          />
        ))}
      </TreeContainer>
      <pre>{JSON.stringify(filterUserSelectedCategories(categories), null, 2)}</pre>
    </main>
  );
};
