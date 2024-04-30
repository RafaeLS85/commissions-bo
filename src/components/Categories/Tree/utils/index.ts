import { Category } from "@/types/categories";

interface SelectedCategories {
  id: string;
  label: string;
}
export function filterUserSelectedCategories(
  categories: Category[]
): SelectedCategories[] {
  const selectedCategories: SelectedCategories[] = [];

  categories.forEach((category) => {
    if (category.isChecked) {
      selectedCategories.push(category);
    }

    if (category.subcategory) {
      selectedCategories.push(
        ...filterUserSelectedCategories(category.subcategory)
      );
    }
  });

  const result = selectedCategories.map((category) => {
    return {
      id: category.id,
      label: category.label,
    };
  });

  return result;
}

export function setCheckedAllRecursively(
  parentCategory: Category,
  isChecked: boolean,
  isRoot: boolean = true
): void {
  if (!isRoot) {
    parentCategory.isChecked = isChecked;
  }
  parentCategory.subcategory.forEach((subcategory) => {
    setCheckedAllRecursively(subcategory, isChecked, false);
  });
}

export const updateCategories = (
  categories: Category[],
  item: Category
): Category[] => {
  return categories.map((category) => {
    if (category.id === item.id) {
      setCheckedAllRecursively(item, !item.isChecked);
      return { ...category, isChecked: !item.isChecked };
    }
    if (category.subcategory) {
      return {
        ...category,
        subcategory: updateCategories(category.subcategory, item),
      };
    }
    return category;
  });
};
