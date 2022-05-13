import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="ids solucoes" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Novo Cliente
        </button>
      </Content>
    </Container>
  )
}