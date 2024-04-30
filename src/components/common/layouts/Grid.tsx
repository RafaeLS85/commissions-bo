import { desktop } from '@/lib/media';
import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-gap: 1rem 2rem;

  ${desktop`
    grid-template-columns: 1fr 1fr;
  `}
`;