import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Chevron({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
    </svg>
  );
}

Chevron.propTypes = {
  className: string,
};

Chevron.defaultProps = {
  className: undefined,
};

export default styled(Chevron)`
  height: 2rem;
  fill: #444;
`;
