import React from 'react'

import { Container, Text, Center, Box } from '@chakra-ui/react'
const Prices = () => {
  return (<>
    <Container bg='#f1f1f1' maxW='100%' textAlign={'center'} >
    <Text color='black' fontSize='3xl' pt='40px' ><b>Our fees</b></Text>
    <Container bg='#f1f1f1' maxW='100%'><Text color={'grey'} align='center' mb='20px'>
          Check our latest audits
        </Text></Container><br/>
        <Center>
                <Box  w='50%' p={4} color='black' 
                borderWidth='2px' borderColor={'black'}
                borderRadius='15px' mb='20px'>
                    This is the Box
                </Box>
        </Center>
    </Container>
    </>)
}

export default Prices