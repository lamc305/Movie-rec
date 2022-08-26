import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Grid, GridItem, Heading, HStack, Image, Tag, TagLabel, Text, VStack } from "@chakra-ui/react"
import React from "react"
import imageNotFound from '../assets/not-found-image.jpg'

function MovieDetails({ details, backPage }) {



  return (
    <>
      <VStack
        w='80vw'
        m='20px auto'
        display={{ sm: 'flex', md: 'none', base: 'flex' }}
      >
        <Heading
          textAlign='center'
          fontSize='2.4rem'

        >{details.title}</Heading>
        {details.poster_path ?
          <Image
            loading="lazy"
            minW='120px'
            maxW='500px'
            p='20px'
            w='220px'
            objectFit='contain'
            src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt='image-poster'
          />
          : <Image src={imageNotFound}
            loading="lazy"
            minW='120px'
            maxW='500px'
            p='20px'
            w='220px'
            objectFit='contain'
            alt='image-poster'
          />
        }
        <Text
          pt='10px'
          fontSize='1.5rem'
          textAlign='justify'
          maxW='300px'
        >{details.overview}</Text>
        <HStack pt='20px' pb='20px' h='auto' flexWrap='wrap'>
          {details.genres.map(({ id, name }) => (
            <Tag key={id}>
              <TagLabel>{name}</TagLabel>
            </Tag>
          ))}
        </HStack>

      </VStack>
      <Grid templateColumns='1fr 1fr' w='80vw' m='25px auto' h='63vh' display={{ base: 'none', md: 'grid' }}>
        <GridItem
          p='20px'
          minH='100%'
        >
          {details.poster_path ?
            <Image
              loading="lazy"
              maxW='100%'
              maxH='100%'
              m='0 auto'
              borderRadius='15px'
              objectFit='contain'
              src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} alt='image-poster'
            />
            : <Image src={imageNotFound}
              loading="lazy"
              minW='120px'
              maxW='500px'
              p='20px'
              w='220px'
              objectFit='contain'
              alt='image-poster'
            />
          }
        </GridItem>
        <GridItem
          p='20px'
          minH='100%'
        >
          <Heading
            textAlign='center'
            fontSize='2.4rem'
            mb='50px'
          >{details.title}</Heading>
          <Text
            pt='10px'
            fontSize='1.5rem'
            textAlign='justify'
            maxW='500px'
          >{details.overview}</Text>
          <HStack pt='20px' pb='20px' h='auto' flexWrap='wrap'>
            {details.genres.map(({ id, name }) => (
              <Tag key={id}>
                <TagLabel>{name}</TagLabel>
              </Tag>
            ))}
          </HStack>
        </GridItem>
      </Grid>
      <Box w='100%' p='10px' pt='35px' display='flex' justifyContent='center'>
        <Button
          m='0 auto'
          onClick={backPage}
          leftIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
      </Box>
    </>
  )

}

export default React.memo(MovieDetails)