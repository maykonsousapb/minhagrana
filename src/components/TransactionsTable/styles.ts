import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;
  max-width: 1120px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      font-weight: 700;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      text-align: left;
      padding: 1rem 2rem;
      border: 0;
      background: var(--foreground);
      color: var(--font-dark);
      &:first-child {
        font-weight: 500;
      }
      &.income {
        color: var(--green);
      }
      &.outcome {
        color: var(--red);
      }
    }
  }
`;
