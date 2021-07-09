import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background-dark);
`;

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem 12rem;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 1rem;
    color: var(--foreground);
    background: var(--purple-light);
    font-weight: 700;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
