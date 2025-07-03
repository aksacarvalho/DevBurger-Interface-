
import Logo from '../../assets/logo.svg'

import { Container, 
  Form, 
  InputContainer, 
  LeftContainer, 
  RightContainer, 
  Title, 
  Link,
  Button, } from './styles'

export function Login() {

   return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>
      <RightContainer>
        <Title>
         Olá, seja bem vindo ao <span>Dev Burguer!</span> 
Acesse com seu <span>login e senha.</span>
        </Title>
       <Form action="">
         <InputContainer>
             <label>Email</label>
             <input type="email" />
         </InputContainer>

         <InputContainer>
             <label>Senha</label>
             <input type="password" />
         </InputContainer>
         <Link>Esqueci minha senha.</Link> 
         <Button>Entrar</Button>
        </Form>
       </RightContainer> 
    </Container>

   );
}