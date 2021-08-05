import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--font-light);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    color: var(--font-dark);
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid var(--inputborder-color);
    background: var(--input-background);
    font-weight: 400;
    font-size: 1rem;
    & + input {
      margin-top: 0.5rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 4rem;
    background: var(--purple-light);
    border-radius: 0.25rem;
    border: 0;
    margin-top: 1.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--font-light);
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const OpenModalButton = styled.button`
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
`;

export const TransactionTypesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  padding: 0.5rem 0;
  button {
  }
`;

interface TypeRadioButtonProps {
  isActive: boolean;
  activeColor: 'red' | 'green';
}

const colors = {
  green: '#c9fdd6',
  red: '#ffc7c7',
};

export const TypeRadioButton = styled.button<TypeRadioButtonProps>`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px var(--input-border-color);
  background: ${props => (props.isActive ? colors[props.activeColor] : '#fff')};
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
  img {
    width: 20px;
    height: 20px;
    margin-right: 1rem;
  }
  span {
    font-weight: 600;
    color: var(--font-dark);
  }
`;
