import { Container, Grid, GridItem, useColorModeValue, Link, Image, Text, Button, HStack, Center } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaTwitter } from '@chakra-ui/icons'
import Logo from '../Assets/Images/dvs.png'

const Footer = () => {
  return (
 <>
     <Container maxW='100%' bg={useColorModeValue('gray.900', 'gray.900')} align='center'>
     <Grid templateColumns={['repeat(1, 1fr)', null, null, null, 'repeat(3, 1fr)']} gap={6} pt='20px' pb='20px' color='white' >
  <GridItem w='100%'><Image src={Logo.src} maxW='250px' mb='-20px'/></GridItem>
  <GridItem w='100%' mt={[null, null, null, null, '10px']}><Text>All Rights Reserved.</Text></GridItem>
  <GridItem w='100%'><Center>
  <HStack> 
  <Button colorScheme='blackAlpha'><Link href='https://discord.com/invite/qZ36FNT23w' isExternal>Discord</Link></Button>
  <Button colorScheme='blackAlpha'><Link href='https://twitter.com/DRIVENprotocol' isExternal>Twitter</Link></Button>
  <Button colorScheme='blackAlpha'><Link href='https://www.drivenecosystem.com/' isExternal>DRIVENecosystem</Link></Button>
  </HStack> </Center>
  </GridItem>
</Grid>
     </Container>
 </>
  )
}

export default Footer