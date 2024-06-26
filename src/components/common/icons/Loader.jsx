import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Loader({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <circle r="2" cx="6" cy="12">
        <animate
          attributeName="r"
          values="2;3;2;2;2;2;2"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle r="2" cx="12" cy="12">
        <animate
          attributeName="r"
          values="2;3;2;2;2;2;2"
          dur="1s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </circle>
      <circle r="2" cx="18" cy="12">
        <animate
          attributeName="r"
          values="2;3;2;2;2;2;2"
          dur="1s"
          repeatCount="indefinite"
          begin="0.6s"
        />
      </circle>
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
