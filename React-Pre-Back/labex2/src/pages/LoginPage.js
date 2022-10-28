import React, { useState } from 'react'
import { useForm } from '../hook/useForm'
import { validatePassword, validateEmail } from '../constants/Constants';
import { Button } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';
import { EmailInput } from '../components/inputs/Email';
import { PasswordInput } from '../components/inputs/Password';
import { Cordinator } from '../router/Cordinator';
import { Login } from '../constants/Constants'


export const LoginPage = () => {

  const { goToAdminHome } = Cordinator();

  const [body, onChange] = useForm({ email: "", password: "" });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordInvalid] = useState(true);

  const fazerLogin = async (event) => {
    event.preventDefault()
    setIsEmailValid(validateEmail(body.email));
    setIsPasswordInvalid(validatePassword(body.password));

    try {
      const { token } = isEmailValid && isPasswordValid && await Login({
        email: body.email,
        password: body.password
      });
      localStorage.setItem("token", token);
      goToAdminHome();

    } catch (event) {
      console.log(event);
    }
  }
  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Página de Login</h1>
        <form onSubmit={fazerLogin}>
          <EmailInput
            value={body.email}
            onChange={onChange}
            isValid={isEmailValid}
          />
          <PasswordInput
            value={body.password}
            onChange={onChange}
            isValid={isPasswordValid}
          />
          <Button onClick={(fazerLogin)} type='submit' variant='outline'> Entrar </Button>
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}