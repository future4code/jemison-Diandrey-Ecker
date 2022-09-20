import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useForm } from '../hook/useForm'
import { BASE_URL } from './../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, InputGroup, InputRightElement } from '@chakra-ui/react'
import { BackgroundContainer, FormContainer } from '../GlobalStyle';

const LoginPage = () => {
  const navigate = useNavigate()
  const [body, onChange, clear] = useForm({ email: "", password: "" })

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const fazerLogin = (event) => {
    event.preventDefault()

    setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(body.email));

    axios.post(`${BASE_URL}login`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token); //o nome "token" é como ele vai indentificar no locanStorage
        navigate("admin/trips/list")
      }).catch((error) => {
        console.log(error.message)
      })
    clear();

  }

  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <BackgroundContainer>
      <FormContainer>
        <h1>Página de Login</h1>
        <form onSubmit={fazerLogin}>
          <FormControl isInvalid={!isEmailValid}>
            <FormLabel>Email</FormLabel>
            <Input
              name='email'
              // type='email'
              value={body.email}
              onChange={onChange}
              placeholder="email"
            />
            {!isEmailValid ? (
              <FormErrorMessage>
                E-mail Inválido
              </FormErrorMessage>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          {/* funcionando ate aqui */}

          <FormControl>

            <InputGroup size='md'>
              <Input
                pr='4.5rem'
                type={showPassword ? 'text' : 'password'}
                placeholder='Senha'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>

            {!isEmailValid ? (
              <FormHelperText>
                Senha Inválida
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>

          <Button type="submit" variant='outline'> Login </Button>
        </form>
      </FormContainer>
    </BackgroundContainer>
  )
}

export default LoginPage;







// {/* <input
// email="email"
// name="email"
// type="email"
// placeholder="E-mail"
// value={body.email}
// onChange={onChange}
// required
// // pattern=''
// /> */}

// {/* <label htmlFor="password">Senha: </label>
//             <input
//               email="password"
//               name="password"
//               type="password"
//               placeholder="Senha"
//               value={body.password}
//               onChange={onChange}
//               required
//               pattern="^.{3,}"
//             /> */}