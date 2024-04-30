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
  id: string;
}

export default function SearchCategories({ onSearch, setPage, id }: Props) {
  const [value, setValue] = useState("");
  const ref = useRef<HTMLInputElement>(null);
 
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
        <span>
          <Input
            ref={ref}
            id={id}
            value={value}
            name={id}
            onChange={(value: any) => setValue(value)}
            placeholder="Ingresar categoría"
            data-id="seachInput"
          />
        </span>

        <SearchButtonContainer>
          <Button
            id="searchButton"            
            type="submit"
            variant="primary"          
            data-id="searchButton"
            size="s"
            // disabled={true}
          >{i18n["search"]}</Button>
          <Button
            id="cleanSearch"            
            variant="tertiary"
            onClick={cleanSearch}
            data-id="cleanSearch"
            size="s"
          >{i18n["clean"]}</Button>
        </SearchButtonContainer>
      </FormContainer>
    </>
  );
}
