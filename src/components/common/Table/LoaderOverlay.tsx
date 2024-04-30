import React from 'react';
import styled from 'styled-components';
import Loader from '../icons/Loader';

const Shade = styled.div`
  background-color: ${({ theme: { neutral25 } }) => neutral25};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;  
`;

const StyledLoader = styled(Loader)`
  height: 5rem;
`;

function LoaderOverlay({ children, loading }: any) {
  return (
    <div>
      {children}
      {loading && (
        <Shade>
          <StyledLoader />
        </Shade>
      )}
    </div>
  );
}

export default styled(LoaderOverlay)`
  position: relative;
  display: inherit;
`;
