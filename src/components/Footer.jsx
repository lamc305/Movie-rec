import { Box, HStack, Image, Text } from '@chakra-ui/react'
import tmdb from '../assets/tmdb.svg'

function Footer() {
  return (
    <Box
      h='90px'
      w='96vw'
      position='relative'
      bottom='0'
      display='flex'
      justifyContent='flex-end'
      pr='20pxpx'
      pb='0px'
    >
      <HStack w='250px'>
        <Image src={tmdb} h='50px' objectFit='contain' />
        <Text 
          ml='10px' 
          fontSize='1.4rem' 
          textAlign='justify' 
        >"This product uses the TMDB API but is not endorsed or certified by TMDB."</Text>
      </HStack>
    </Box>
  )
}
export default Footer