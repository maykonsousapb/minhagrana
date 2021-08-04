import { useState } from 'react';
import Modal from 'react-modal';
import {
  Container,
  OpenModalButton,
  TransactionTypesContainer,
} from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

export const NewTransactionModal = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <OpenModalButton onClick={() => setopen(true)}>
        Nova transação
      </OpenModalButton>
      <Modal
        isOpen={open}
        onRequestClose={() => setopen(false)}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <button
          type="button"
          className="close-modal-button"
          onClick={() => setopen(false)}
        >
          <img src={CloseImg} alt="Fechar Modal" />
        </button>
        <Container>
          <h2>Nova Transação</h2>
          <input type="text" placeholder="Título" />
          <input type="text" placeholder="Valor" />
          <TransactionTypesContainer>
            <button type="button">
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>

            <button type="button">
              <img src={OutcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypesContainer>
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};
