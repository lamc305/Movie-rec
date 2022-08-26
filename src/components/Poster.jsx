import { Box, Button, GridItem, Heading, Link, Image, Text, Skeleton, useColorModeValue, TagLabel, Tag } from "@chakra-ui/react"
import { motion } from "framer-motion"
import React from "react"
import { Link as LinkR } from "react-router-dom"
import imageNotFound from '../assets/not-found-image.jpg'

function Poster({ id, poster_path, original_title, release_date, vote_average }) {

  const bg = useColorModeValue('red.300', 'blue.400')

  return (
    <GridItem
      as={motion.div}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      m='20px'
      h='393px'
      key={id}
      bg='gray'
      borderRadius='15px'
      overflow='hidden'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Link
        as={LinkR}
        to={`/details/${id}`}
        h='100%'
        _hover={{ textDecoration: 'none' }}
      >
        {poster_path ? 
        <Image maxW='100%' objectFit='contain' src={`https://image.tmdb.org/t/p/w500${poster_path}`} /> : 
        <Image src={imageNotFound} h='250px' objectFit='contain' maxW='100%' />}
        <Tag
          px='10px'
          borderRadius='10px'
          position='relative'
          fontSize='1.4rem'
          top='-14px'
          right='-169px'
        >
          <TagLabel>
            {vote_average}
          </TagLabel>
        </Tag>
        {release_date && <Text
          fontSize='1.4rem'
          position='relative'
          top='-38px'
          left='2px'
        >{release_date.slice(0, 4)}</Text>}
        <Heading
          fontSize='1.7rem'
          mt='5px'
          textAlign='center'
          position='relative'
          top='-49px'
          p='8px'
          pb='0'
        >{original_title}</Heading>
      </Link>
    </GridItem>

  )
}

export default React.memo(Poster)