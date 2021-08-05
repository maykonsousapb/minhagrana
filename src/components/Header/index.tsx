import React from 'react';
import { Container, Content } from './styles';
import LogoImg from '../../assets/logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Minha Grana" />
        <NewTransactionModal />
      </Content>
    </Container>
  );
};
