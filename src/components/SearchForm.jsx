import { Search2Icon } from "@chakra-ui/icons"
import { FormControl, Input, InputGroup, InputRightElement, useColorModeValue } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function Search() {

  const navigate = useNavigate()
  const color = useColorModeValue('white', 'white')
  const bgColor = useColorModeValue('blackAlpha.500', 'whiteAlpha.500')

  const handleSubmit = (event) => {
    event.preventDefault()
    const keyword = event.target.input.value.trim()
    if (keyword.length === 0) return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This field can\'t be empty!',
    })
    navigate(`/search/${keyword}`)
    event.target.input.value = ''
  }

  return (
    <FormControl
      as='form'
      onSubmit={handleSubmit}
      display='flex'
      justifyContent='center'
      alignItems='center'
      maxW='50vw'
      minW='10vw'
    >
      <InputGroup>
        <InputRightElement top='5px' right='10px'
          children={<Search2Icon fontSize='1.5rem' />} />
        <Input
          _placeholder={{ color: color }}
          name='input'
          borderRadius='15px'
          variant='outline'
          w='100%'
          h='35px'
          bg={bgColor}
          color={color}
          fontSize='1.4rem'
          placeholder='Search your movie...'
        />
      </InputGroup>
    </FormControl>
  )
}

export default Search