import { mode } from '@chakra-ui/theme-tools'

export const Tag = {
  parts: [ "label"],
  baseStyle: (props) => ({
    label: {
      m: '5px',
      p: '5px',
      borderRadius: '10px',
      color:'black',
      bg: mode('red.400', 'brand.4')(props),
      fontSize: '1.4rem'
    }
  })
}