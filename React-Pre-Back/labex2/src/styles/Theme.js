import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    components: {
        Button: {
            variants: {
                outline:{
                    bg: "azul.200",
                    width: "100%",
                    padding: "15px",
                }
            }
        }
    },
    colors: {
        azul: {
            200: "#836FFF"
        }
    }
  })