import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react'

export const EmailInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel>Email</FormLabel>
            <Input
                name='email'
                value={value}
                onChange={onChange}
                placeholder="E-mail"
            />
            {!isValid ? (
                <FormErrorMessage>
                    E-mail Inválido
                </FormErrorMessage>
            ) : (
                <FormErrorMessage>
                    Email is required.
                </FormErrorMessage>
            )}
        </FormControl>
    )
}