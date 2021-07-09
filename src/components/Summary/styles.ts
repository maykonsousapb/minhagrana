import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: -5rem;
  div {
    background: var(--foreground);
    color: var(--font-dark);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.total {
      background: var(--green);
    }
    &:hover {
      filter: brightness(0.9);
      font-weight: 700;
    }
  }
`;
