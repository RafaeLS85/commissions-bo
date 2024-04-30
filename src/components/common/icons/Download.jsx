import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Download({ className }) {
  return (
    <svg className={className} viewBox="0 96 960 960">
      <path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm260-153L287 550l43-43 120 120V256h60v371l120-120 43 43-193 193Z" />
    </svg>
  );
}

Download.propTypes = {
  className: string,
};

Download.defaultProps = {
  className: undefined,
};

export default styled(Download)`
  height: 2rem;
  fill: #0000E4;
`;
