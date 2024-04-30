import React from 'react';
import { oneOf, string, number } from 'prop-types';
import styled from 'styled-components';

const types = {
  integer: 'integer',
  decimal: 'decimal',
  currency: 'currency',
  percent: 'percent',
};

const StyledNumber = styled.span`
  ${({ isNegative }) => (isNegative ? 'color: #B00000;' : '#3B3B4E')}
  font-weight: bold;  
  text-align: right;
  font-family: "Work Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default function FormatedNumber({ className, type, value }) {
  const formater = new Intl.NumberFormat('es-ar', {
    minimumFractionDigits: types.integer === type ? undefined : 2,
    maximumFractionDigits: types.integer === type ? undefined : 2,
    minimumIntegerDigits: types.integer === type ? undefined : 2,
    style: types.integer === type ? types.decimal : type,
    currency: types.currency === type ? 'ARS' : undefined,
  });

  return (
    <StyledNumber className={className} variant={type} isNegative={value < 0}>
      {formater.format(value)}
    </StyledNumber>
  );
}

FormatedNumber.defaultProps = {
  className: undefined,
  type: 'decimal',
};

FormatedNumber.propTypes = {
  className: string,
  type: oneOf([types.integer, types.decimal, types.currency, types.percent]),
  value: number.isRequired,
};
