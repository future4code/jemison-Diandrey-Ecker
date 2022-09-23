import {
    Input,
    FormControl,
    FormLabel,
    FormErrorMessage,
} from '@chakra-ui/react'

export const NameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl isInvalid={!isValid}>
            <FormLabel>Nome</FormLabel>
            <Input
                name='name'
                value={value}
                onChange={onChange}
                placeholder="Nome Completo"
            />
            {!isValid ? (
                <FormErrorMessage>
                    Nome deve ter ao menos 2 caracteres.
                </FormErrorMessage>
            ) : (
                <FormErrorMessage>
                    Name is required.
                </FormErrorMessage>
            )}
        </FormControl>
    )
}