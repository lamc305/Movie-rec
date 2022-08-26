import { mode } from '@chakra-ui/theme-tools'

export const Button =  {
  baseStyle: {
    fontWeight: 'semibold'
  },
  sizes: {
    xl: {
      h: '56px',
      fontSize: 'lg',
      px: '32px',
    },
  },
  variants: {
    'with-shadow': {
      bg: 'red.400',
      boxShadow: '0 0 2px 2px #efdfde',
    },
    ds: (props) =>  ({
      h: '35px',
      fontSize: '1.3rem',
      bg: mode('black', 'white')(props),
      px: '18px',
      py: '15px',
      color: mode('white', 'black')(props),
      borderRadius: '15px',
    }),
    sm: {
      bg: 'teal.500',
      fontSize: 'md',
    },
  },
  defaultProps: {
    variant: 'ds'
  }
}