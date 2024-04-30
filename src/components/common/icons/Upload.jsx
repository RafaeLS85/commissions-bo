import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Upload({ className }) {
  return (
    <svg className={className} viewBox="0 96 960 960">
      <path d="M220 896q-24 0-42-18t-18-42V693h60v143h520V693h60v143q0 24-18 42t-42 18H220Zm230-153V372L330 492l-43-43 193-193 193 193-43 43-120-120v371h-60Z" />
    </svg>
  );
}

Upload.propTypes = {
  className: string,
};

Upload.defaultProps = {
  className: undefined,
};

export default styled(Upload)`
  height: 2rem;
  fill: #444;
`;
