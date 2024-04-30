import { Category } from "@/types/categories";
import { HiChevronUp, HiChevronDown  } from "react-icons/hi2";
export const ArrowIcon = ({
  show,
  item,
}: {
  show: boolean;
  item: Category;
}) => {
  return (
    <>
      {show && item.subcategory.length > 0 && <HiChevronUp size={30} style={{ fill: 'black' }} />}
      {!show && item.subcategory.length > 0 && <HiChevronDown />}
    </>
  );
};
