import React from 'react'

import { Container, Text, Center, Box, Grid, 
    Link, GridItem, Button, useDisclosure  } from '@chakra-ui/react'

import { AddIcon } from '@chakra-ui/icons';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

  const auditPrices= [
    {
      name: 'Audit1',
      price: '$2,400',
      duration: '3 days',
      modalContent: 'Lore ipsum and shitty shits',
    },
    {
        name: 'Audit 2',
        price: '$2,400',
        duration: '3 days',
        modalContent: 'Lore ipsum and shitty shits',
      },
      {
        name: 'Audit3',
        price: '$200',
        duration: '5 days',
        modalContent: 'Lore ipsum and shitty shits',
      },
      {
        name: 'Audit4',
        price: '$2,400',
        duration: '3 days',
        modalContent: 'Lore ipsum and shitty shits',
      }
    ]


const Prices = () => {
const { isOpen, onOpen, onClose } = useDisclosure()
  return (<>
    <Container bg='#f1f1f1' maxW='100%' textAlign={'center'} >
    <Text color='black' fontSize='3xl' pt='40px' ><b>Our audits & fees</b></Text>
    <Container bg='#f1f1f1' maxW='100%'><Text color={'grey'} align='center' mb='20px'>
          Check our latest audits
        </Text></Container><br/>
        <Center>

        <Grid templateColumns='repeat(1, 1fr)' gap={6} w={['100%', null, null, null, '50%']}> 
        <GridItem>
        {auditPrices && auditPrices.map(audit => (
            <div key={audit.name}>
            <Box  w={'100%'} p={4} color='black' 
                borderWidth='2px' borderColor={'black'}
                borderRadius='15px'
                textAlign={'left'}
                mb='20px'>
                  <Grid templateColumns='repeat(4, 1fr)' gap={6} >
                        <GridItem w='100%' h='10'>
                            <Text><b>Type</b></Text>
                            <Text>{audit.name}</Text>
                        </GridItem>

                        <GridItem w='100%' h='10'>
                            <Text><b>ETA</b></Text>
                            <Text>{audit.duration}</Text>
                        </GridItem>


                        <GridItem w='100%' h='10'>
                            <Text><b>Price</b></Text>
                            <Text>{audit.price}</Text>
                        </GridItem>

                        <GridItem w='100%' h='10'>
                        <Button
              variant={'solid'}
              bg='#000b22'
              color='white'
              w='100%'
              size={'sm'}
              mr={'10px'}
              mt='7px'
              _hover={{ bg: '#17294e'}} onClick={onOpen}>See details</Button>
                        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent mt='20%'>
          <ModalHeader>{audit.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text>{audit.modalContent}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant={'solid'}
              bg='#000b22'
              color='white'
              w='50%'
              size={'sm'}
              mr={1}
              leftIcon={<AddIcon />}
              _hover={{ bg: '#17294e'}}> <Link isExternal href={'https://tcj29s11ect.typeform.com/to/byJd7PeS'}>
              Request An Audit
              </Link></Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                        </GridItem>
                    </Grid> 
                </Box>
            </div>
        ))}
        </GridItem></Grid>  
        </Center>
    </Container>
    </>)
}

export default Prices