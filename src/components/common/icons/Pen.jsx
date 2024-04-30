import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

function Pen({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path
          fill="none"
          d="M18.535 1.09a.5.5 0 0 0-.707 0L4.047 14.87a.5.5 0 0 0 0 .707l3.613 3.613a.5.5 0 0 0 .707 0L22.15 5.41a.5.5 0 0 0 0-.707L18.535 1.09z"
        />
        <path d="M3.997 15.84l-.123 3.525 3.524-.124-3.401-3.4z" />
        <path fill="none" strokeLinecap="square" d="M19.5 7.5l-2-2" />
      </g>
    </svg>
  );
}

Pen.propTypes = {
  className: string,
};

Pen.defaultProps = {
  className: undefined,
};

export default styled(Pen)`
  height: 1.6rem;
  fill: #444;
`;
