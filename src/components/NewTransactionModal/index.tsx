import { useState } from 'react';
import Modal from 'react-modal';
import {
  Container,
  OpenModalButton,
  TransactionTypesContainer,
  TypeRadioButton,
} from './styles';
import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';

export const NewTransactionModal = () => {
  const [open, setopen] = useState(false);
  const [type, setType] = useState('deposit');
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
            <TypeRadioButton
              type="button"
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TypeRadioButton>

            <TypeRadioButton
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={OutcomeImg} alt="Saída" />
              <span>Saída</span>
            </TypeRadioButton>
          </TransactionTypesContainer>
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};
