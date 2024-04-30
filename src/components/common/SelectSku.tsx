import { Select } from '@chakra-ui/react'

export const SelectSku = ({
  actions,
  selected,
  id
}: {
  id: string
  actions: any;
  selected: { id: string; label: string };
}) => {
  const options = [
    { id: "sku", label: "SKU" },
    { id: "seller", label: "Seller" },
  ];

  const handleSelectChange = (option: any) => {
    actions.setSelected(option);
  };

  return (
    // <Select
    //   id={id}
    //   options={options}
    //   value={selected.id}
    //   onChange={handleSelectChange}
    //   width={95}
    // />
    <Select placeholder='Select option'>
      <option value='option1'>Option 1</option>
      <option value='option2'>Option 2</option>
      <option value='option3'>Option 3</option>
    </Select>
  );
};
