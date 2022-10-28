import React, { useState } from 'react'
import { useForm } from '../hook/useForm'
import { Button } from '@chakra-ui/react'
import { EmailInput } from '../components/inputs/Email';
import { PasswordInput } from '../components/inputs/Password';
import { NameInput } from '../components/inputs/Name';
import { BackgroundContainer, FormContainer } from '../GlobalStyle'
import { validatePassword, validateEmail, validateName, Signup } from '../constants/Constants';
import { Cordinator } from '../router/Cordinator';

export const ApplicationFormPage = () => {

  const { goToLogin } = Cordinator();

  const [body, onChange] = useForm({ name: "", email: "", password: "" });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordInvalid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);

  const fazerLogin = async (event) => {
    event.preventDefault()
    setIsEmailValid(validateEmail(body.email));
    setIsPasswordInvalid(validatePassword(body.password));
    setIsNameValid(validateName(body.name));

    try {
      const { token } = isNameValid && isEmailValid && isPasswordValid && await Signup({
        name: body.name,
        email: body.email,
        password: body.password
      });
      localStorage.setItem("token", token);
      goToLogin();

    } catch (event) {
      console.log(event);
    }
  }

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Página de Login</h1>
        <form onSubmit={fazerLogin}>
          <NameInput
            value={body.name}
            onChange={onChange}
            isValid={isNameValid}
          />
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
          <Button onClick={(fazerLogin)} type='submit' variant='outline'> Cadastrar </Button>
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}