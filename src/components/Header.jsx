import React, { useEffect } from 'react'
import { Button, HStack, Image, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Search from "./SearchForm"
import logo from '../assets/logo11.png'
import logoBlack from '../assets/logo22.png'


function Header() {

  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('white', 'brand.3')

  const favicon = document.getElementById('favicon')

  useEffect(() => {
    colorMode === 'dark' ? favicon.href = '/movie_icon.svg' : favicon.href = '/movie_icon_red.svg'
  }, [colorMode])

  const logoew = colorMode === 'dark' ? logo : logoBlack

  return (
    <HStack
      w='100%'
      m='0 auto'
      justifyContent='space-around'
      position='sticky'
      top='0'
      zIndex='99'
      h='100px'
      bg={bgColor}
    >
      <Link to='/' 
      
      >
        <Image
          w='12vw'
          h='7vw'
          minH='50px'
          maxH='80px'
          maxW='140px'
          minW='80px'
          borderRadius='10px'
          src={logoew}
        />
      </Link>
      <Search />
      <Button
        onClick={toggleColorMode}
        h='40px'
        w='40px'
      >
        {colorMode === 'light' ? <MoonIcon h='2em' w='2em' /> : <SunIcon h='2em' w='2em' />}
      </Button>

    </HStack>
  )
}

export default React.memo(Header)