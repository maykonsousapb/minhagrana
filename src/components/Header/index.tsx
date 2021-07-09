import React from 'react';
import { Container, Content } from './styles';
import LogoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Minha Grana" />
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
};
