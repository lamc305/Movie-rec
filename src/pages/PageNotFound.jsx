import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, HStack, Image, Text, VStack, Wrap } from "@chakra-ui/react"
import { Helmet } from "react-helmet"
import { useNavigate } from "react-router-dom"
import brokenRobot from '../assets/robotbg.png'
function PageNotFound() {

  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }

  return (
    <>
      <Helmet>
        <title>Movie Rec | Page Not Found</title>
        <meta name='description'  content='Page Not Found'/>
      </Helmet>

      <Box 
        w='80vw' 
        h='77vh' 
        display='flex' 
        justifyContent='center' alignItems='center' 
        m='0 auto'
        p='30px'
      >
        <VStack 
          w='50vw' 
          justifyContent='center' 
          m='0 auto' 
          h='60vh' 
          alignItems='center' 
          bg='blackAlpha.500' borderRadius='10px' 
          p='30px'
        >
          <Box maxW='350px'>
            <Image src={brokenRobot} objectFit='contain' />
          </Box>
          <Heading fontSize='8rem'>
            404
          </Heading>
          <Text fontWeight='bold' fontSize='2rem'>
            Whooops!
          </Text>
          <Text fontSize='1.5rem' textAlign='justify'>
            We couldn't find the site you were looking for.
          </Text>
          <Wrap spacing='20px' pt='40px'>
            
            <Button onClick={backToHome}>
              Back to Home
            </Button>
          </Wrap>
        </VStack>
      </Box>
    </>
  )
}


export default PageNotFound