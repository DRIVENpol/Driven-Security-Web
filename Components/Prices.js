import React, { useState } from 'react'

import { Container, Text, Center, Box, Grid, 
    Link, GridItem, Button } from '@chakra-ui/react'

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
      name: 'Technical Audit',
      price: '$2,200',
      duration: '3 days',
      modalContent: 'DRIVENsecurity is providing a detailed smart contract audit that is thoroughly examined and analyzed. This procedure is carried out to uncover mistakes, flaws, and security vulnerabilities in the code in order to recommend improvements and solutions. In general, smart contract audits are required because most contracts deal with financial assets.',
      modalTitle: 'Technical Audit'
    },
    {
        name: 'Fundamental Audit',
        price: '$2,500',
        duration: '3 days',
        modalContent: 'Fundamental Analysis is an overall project analysis with several separate aspects that will be evaluated before reaching a final decision. Every element will be rated with a score ranging from 1 to 5, and we will be able to obtain a total score and conclusion for all aspects.',
        modalTitle: 'Fundamental Audit'
      },
      {
        name: 'Wallet Forensics',
        price: '$900',
        duration: '5 days',
        modalContent: "In the process of wallet forensics, DRIVENteam will go through the top 25 holders and check their stability and holding amounts. We will also look at the contract owner's initial transactions that are made right after the initial minting of the supply after smart contract deployment, in the hopes of uncovering suspicious token liquidation from team members and any suspicious use of the tokens from provided liquidity pool.",
        modalTitle: 'Wallet Forensics'
      },
      {
        name: 'KYC Verification',
        price: '$450',
        duration: '3 days',
        modalContent: 'ID Verification and Call Verification.',
        modalTitle: 'KYC Verification'
      },
    ]


const Prices = () => {
const [modalT, setModalT] = useState('');
const [modalC, setModalC] = useState('');
const [modalIsOpen, setModalIsOpen] = useState(false);

const closeModal = () => {
    setModalIsOpen(false)
} 

  return (<>
    <Container bg='#f1f1f1' maxW='100%' textAlign={'center'}  id="prices">
    <Text color='black' fontSize='3xl' pt='40px' ><b>Our audits & fees</b></Text>
    <Container bg='#f1f1f1' maxW='100%'><Text color={'grey'} align='center'>
          Learn more about our audits and find the according fees
        </Text></Container><br/>
        <Center>

        <Grid pb='60px' templateColumns='repeat(1, 1fr)' gap={6} w={['100%', null, null, null, '50%']}> 
        <GridItem>
        {auditPrices && auditPrices.map(audit => (
            <div key={audit.name}>
            <Box  w={'100%'} p={4} color='black' 
                borderWidth='2px' borderColor={'black'}
                borderRadius='15px'
                textAlign={'left'}
                pb={['40px', null, null, '40px', null, '20px']} mb='10px'>
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
              mt={['20px', null, null, null, '17px','7px']}
              _hover={{ bg: '#17294e'}} onClick={()=> {
                setModalIsOpen(true)
               setModalC(audit.modalContent)
               setModalT(audit.modalTitle)
               
              }}>See details </Button>

</GridItem>
                    </Grid> 
                </Box> </div>
        ))}
              
<Modal isOpen={modalIsOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent mt={['50%', '40%', null, '25%', '15%']}>
          <ModalHeader>{modalT}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           <Text>{modalC}</Text>
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
        </GridItem></Grid>  
        </Center>
    </Container>
    </>)
}

export default Prices