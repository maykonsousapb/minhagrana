import { FormEvent, useState } from 'react';
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
import { api } from '../../api/api';

interface formFieldProps {
  field: string;
  value: string | number;
}
const initialFormState = {
  title: '',
  amount: 0,
  type: 'deposit',
  category: '',
  created_at: new Date(),
};

export const NewTransactionModal = () => {
  const [open, setopen] = useState(false);
  const [form, setForm] = useState(initialFormState);

  const handleSetField = (
    field: formFieldProps['field'],
    value: formFieldProps['value']
  ) => {
    setForm({
      ...form,
      [field]: value,
    });
  };
  const handleCreateNewtransaction = (event: FormEvent) => {
    event.preventDefault();
    api.post('/transactions', form);
    setForm(initialFormState);
  };
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
        <Container onSubmit={handleCreateNewtransaction}>
          <h2>Nova Transação</h2>
          <input
            type="text"
            placeholder="Título"
            value={form.title}
            onChange={e => handleSetField('title', e.target.value)}
          />
          <input
            type="text"
            placeholder="Valor"
            value={form.amount ? form.amount : ''}
            onChange={e => handleSetField('amount', Number(e.target.value))}
          />
          <TransactionTypesContainer>
            <TypeRadioButton
              type="button"
              onClick={() => handleSetField('type', 'deposit')}
              isActive={form.type === 'deposit'}
              activeColor="green"
            >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TypeRadioButton>

            <TypeRadioButton
              type="button"
              onClick={() => handleSetField('type', 'withdraw')}
              isActive={form.type === 'withdraw'}
              activeColor="red"
            >
              <img src={OutcomeImg} alt="Saída" />
              <span>Saída</span>
            </TypeRadioButton>
          </TransactionTypesContainer>
          <input
            type="text"
            placeholder="Categoria"
            value={form.category}
            onChange={e => handleSetField('category', e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
};
