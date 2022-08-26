import { extendTheme } from '@chakra-ui/react'
import { Text } from './Text'
import { Tag } from './Tag'
import { Button } from './Button'
import { Heading } from './Heading'
import {mode} from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const breakpoints = {
  sm: '30rem',
  md: '48rem',
  lg: '62rem',
  xl: '80rem',
  '2xl': '96rem',
}

const colors = {
  brand: {
    1: '#90cea1',
    2: '#d2d4f1',
    3: ' #0d253f',
    4: '#01b4e4'
  }
}

const styles = {
  global: (props) => ({
    'html, body': {
      bg: mode('whiteAlpha.600', 'brand.3')(props),
      fontSize: '62.5%',
      h:'100%',
      w:'100%'
    },
    root: {
      minH: '100vh'

    }
  })
}

export const theme = extendTheme({
  breakpoints,
  config,
  colors,
  styles,
  components: {
    Heading,
    Text,
    Tag,
    Button
  }
})