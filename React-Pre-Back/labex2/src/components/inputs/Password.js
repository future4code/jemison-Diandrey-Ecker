import {
    IconButton,
    Input, FormControl,
    FormLabel,
    FormErrorMessage,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export const PasswordInput = ({ isValid, value, onChange }) => {

    const [showPassword, setShowPassword] = useState(false);

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel> Senha </FormLabel>
            <InputGroup size='md'>
                <Input
                    name='password'
                    value={value}
                    onChange={onChange}
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Senha com no mínimo 6 caracteres'
                />
                <InputRightElement width='4.5rem'>
                    <IconButton
                        icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                        h='1.75rem'
                        size='sm'
                        onClick={onClickShowPassword}
                    />
                </InputRightElement>
            </InputGroup>

            {!isValid ? (
                <FormErrorMessage>
                    Senha Inválida
                </FormErrorMessage>
            ) : (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
        </FormControl>
    )
}