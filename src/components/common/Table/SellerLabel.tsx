
import { Tooltip } from "@chakra-ui/react";
import React from "react";

export const SellerLabel = ({
  sellerId,
  seller,
  maxLength = 20,
}: {
  sellerId: string;
  seller: string;
  maxLength?: number;
}) => {  

  if(seller === null || seller === undefined){
    return <></>
  }

  if(sellerId === null || sellerId === undefined){
    return <></>
  }

  if (seller.length + sellerId.length > maxLength) {
    return (
      <Tooltip title={seller + " " + sellerId}>
        <OverFlowText
          seller={seller}
          sellerId={sellerId}
          maxLength={maxLength}
        />
      </Tooltip>
    );
  }

  return (
    <span>
      <OverFlowText seller={seller} sellerId={sellerId} maxLength={maxLength} />
    </span>
  );
};

const OverFlowText = ({
  seller,
  sellerId,
  maxLength,
}: {
  seller: string;
  sellerId: string;
  maxLength: number;
}) => {
  const overflowText =
    seller.length + sellerId.length > maxLength
      ? sellerId.substring(0, maxLength) + " ..."
      : seller + " " + sellerId;

  if (seller.length + sellerId.length > maxLength) {
    return <>{overflowText}</>;
  }

  return (
    <>
      {seller}       
      <i>
        <small>
          {' ('}
          {sellerId}
          {')'}
        </small>
      </i>
    </>
  );
};
