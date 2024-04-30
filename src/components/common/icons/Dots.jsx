import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Loader({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle r="1.6" cx="6" cy="12" />
      <circle r="1.6" cx="12" cy="12" />
      <circle r="1.6" cx="18" cy="12" />
    </svg>
  );
}

Loader.propTypes = {
  className: string,
};

Loader.defaultProps = {
  className: undefined,
};

export default styled(Loader)`
  height: 2rem;
  fill: #444;
`;
