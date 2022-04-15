import React from 'react'

import { Text, Center, Grid, GridItem, Box, Image, Container  } from '@chakra-ui/react'
import Eth from '../Assets/Images/eth-logo.png'
import Bsc from '../Assets/Images/bsc-logo.png'
import Poly from '../Assets/Images/poly-logo.png'
import Ava from '../Assets/Images/ava-logo.png'


const SupportedChains = () => {
  return (
   <>
   <Container maxW='full'>
   <Box bg='telegram.900' pt='20px' pb='20px' mt='20px' mb='20px'>>
    <Center>
    <Text color='white' fontSize='3xl'><b>Supported Chains</b></Text>
    </Center><br />
    <Center><Text color={'white'} align='center' w={[null, '75%']}>
          We are making our audits available for every smart contract
          that is <br/>compatible with an EVM-based blockchain:
        </Text></Center><br/>
    <Center>
    <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={6} w='50%' mb='20px'>
    <GridItem w='100%' h='10' align='center' mb='20px'><Image src={Eth.src} /></GridItem>
    <GridItem w='100%' h='10' align='center' mb='20px'><Image src={Bsc.src} /></GridItem>
    <GridItem w='100%' h='10' align='center' mb='20px'><Image src={Poly.src} /></GridItem>
    <GridItem w='100%' h='10' align='center' mb='20px'><Image src={Ava.src} /></GridItem>

    </Grid>
    </Center>
    </Box>
   </Container>
   </>
  )
}

export default SupportedChains