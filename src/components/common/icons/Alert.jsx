import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Alert({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
    </svg>
  );
}

Alert.propTypes = {
  className: string,
};

Alert.defaultProps = {
  className: undefined,
};

export default styled(Alert)`
  height: 2rem;
  fill: #444;
`;
