import { mode } from '@chakra-ui/theme-tools'

export const Heading = {
  baseStyle: (props) => ({
    color: mode('black', 'white')(props)
  })
}