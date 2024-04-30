import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Close({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  );
}

Close.propTypes = {
  className: string,  
};

Close.defaultProps = {
  className: undefined,
};

export default styled(Close)`
  height: 2rem;
  fill: #d00;
`;
