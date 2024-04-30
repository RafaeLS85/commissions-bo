import React from "react";
import { NoCommissionsWrapper } from "./Table.styles";
import { i18n } from "@/constants/commissions/legacy_i18n";

export default function ShowMessagesOnNotFound({
    skus,
    items,
  }: {
    skus: string;
    items: any[];
  }) {
    return (
      <NoCommissionsWrapper>
        <i>
          {skus && items.length === 0
            ? i18n["commissionExceptions.search.none"]
            : i18n["commissionExceptions.comercial.none"]}
        </i>
      </NoCommissionsWrapper>
    );
  }