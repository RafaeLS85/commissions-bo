// sum.test.js
import {
  filterUserSelectedCategories,
  setCheckedAllRecursively,
  updateCategories,
} from ".";

describe("filterUserSelectedCategories", () => {
  test("should return 0", () => {
    const categories = [
      {
        id: 1,
        label: "Category 1",
        parentId: null,
        count: 3,
        isChecked: false,
        subcategory: [
          {
            id: 2,
            label: "Category 2",
            parentId: 1,
            count: 3,
            isChecked: false,
            subcategory: [],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(0);
  });

  test("should return 3", () => {
    const categories = [
      {
        id: 1,
        label: "Category 1",
        parentId: null,
        count: 3,
        isChecked: true,
        subcategory: [
          {
            id: 2,
            label: "Category 2",
            parentId: 1,
            count: 3,
            isChecked: true,
            subcategory: [
              {
                id: 3,
                label: "Category 3",
                parentId: 2,
                count: 3,
                isChecked: true,
                subcategory: [],
              },
            ],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(3);
  });

  test("should return 1", () => {
    const categories = [
      {
        id: 1,
        label: "Category 1",
        parentId: null,
        count: 3,
        isChecked: false,
        subcategory: [
          {
            id: 2,
            label: "Category 2",
            parentId: 1,
            count: 3,
            isChecked: false,
            subcategory: [
              {
                id: 3,
                label: "Category 3",
                parentId: 2,
                count: 3,
                isChecked: true,
                subcategory: [],
              },
            ],
          },
        ],
      },
    ];

    expect(filterUserSelectedCategories(categories).length).toBe(1);
  });
});

//setCheckedAllRecursively

describe("setCheckedAllRecursively", () => {
  test("should return true on root node", () => {
    const categories = {
      id: 1,
      label: "Category 1",
      parentId: null,
      count: 3,
      isChecked: false,
      subcategory: [],
    };

    setCheckedAllRecursively(categories, true, false);

    expect(categories.isChecked).toBe(true);
  });

  test("should return true on first subcategory", () => {
    const categories = {
      id: 1,
      label: "Category 1",
      parentId: null,
      count: 3,
      isChecked: false,
      subcategory: [
        {
          id: 2,
          label: "Category 2",
          parentId: 1,
          count: 3,
          isChecked: false,
          subcategory: [],
        },
      ],
    };

    setCheckedAllRecursively(categories, true, false);

    expect(categories.subcategory[0].isChecked).toBe(true);
  });
});

describe("updateCategories", () => {
  test("should tooggle isChecked", () => {
    const categories = [
      {
        id: 1,
        label: "Category 1",
        parentId: null,
        count: 1,
        isChecked: true,
        subcategory: [],
      },
    ];

    const updatedCategories = updateCategories(categories, categories[0]);
    expect(updatedCategories[0].isChecked).toBe(false);
  });
});
