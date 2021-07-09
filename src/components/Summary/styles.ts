import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  div {
    background: var(--foreground);
    color: var(--font-dark);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    transition: filter 0.2s;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
