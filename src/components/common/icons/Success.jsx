import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Success({ className }) {
  return (
    <svg className={className} viewBox="0 0 22 22">
      <path d="M10.154 0c5.608 0 10.154 4.546 10.154 10.154s-4.546 10.154-10.154 10.154S0 15.762 0 10.154 4.546 0 10.154 0zm0 1.692a8.462 8.462 0 1 0 8.461 8.462 8.472 8.472 0 0 0-8.461-8.462zm3.81 4.721 1.534 1.651L9.24 14.43l-3.896-4.076 1.325-1.39 2.472 2.602 4.822-5.152z" />
    </svg>
  );
}

Success.propTypes = {
  className: string,
};

Success.defaultProps = {
  className: undefined,
};

export default styled(Success)`
  height: 2rem;
  fill: #444;
`;
