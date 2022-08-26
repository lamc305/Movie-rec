import {mode} from '@chakra-ui/theme-tools'

export const Text = {
  baseStyle: (props) => (
    {
      color: mode('black', 'white')(props)
    }
  )
}