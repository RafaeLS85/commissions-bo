import React, { useState, FormEvent, useRef } from "react";
import { i18n } from "@/constants/commissions/legacy_i18n";
import {
  FormContainer,
  SearchButtonContainer,
} from "@/components/common/Controls.styles";
import { SEARCH_FORM } from "../Commissions/SpecialCommissions/utils/constants";
import { Button, Input } from "@chakra-ui/react";

interface Props {
  onSearch: (arg: string) => void;
  setPage: (arg: number) => void;
  selected: { id: string; label: string };
  id: string;
}

export default function SearchSku({ onSearch, setPage, selected, id }: Props) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  const setPlaceholderMessage = () => {
    const { id } = selected;

    return id === "sku"
      ? SEARCH_FORM.sku_placeholder
      : SEARCH_FORM.seller_placeholder;
  };
  const search = (e: FormEvent) => {
    e.preventDefault();
    setPage(1);
    onSearch(value);
  };

  const cleanSearch = () => {
    if (ref.current && ref.current.value) {
      ref.current.value = "";
      setValue("");
      onSearch("");
    }
  };

  return (
    <>
      <FormContainer onSubmit={search}>
        <span style={{ minWidth: "235px" }}>
          <Input
            ref={ref}
            id={id}
            value={value}
            focusBorderColor='purple.500'
            name={id}
            onChange={(value: any) => setValue(value)}
            placeholder={setPlaceholderMessage()}
            data-id="seachInput"
          />
        </span>

        <SearchButtonContainer>
          <Button
            id="searchButton"
            colorScheme='purple'
            type="submit"           
          >{i18n["search"]}</Button>
          <Button
            id="cleanSearch"          
            
            colorScheme='gray'
            onClick={cleanSearch}
            data-id="cleanSearch"
            
          >{i18n["clean"]}</Button>
        </SearchButtonContainer>
      </FormContainer>
    </>
  );
}
