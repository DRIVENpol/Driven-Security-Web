import React from 'react'
import { ReactNode } from 'react';
import Logo from '../Assets/Images/dvs.png'
import Content from '../Components/Content'

import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack, Text
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.900', 'gray.900')} px={4} position="fixed" width='100%' zIndex={'1'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src={Logo.src} maxW="150px" ml={['10px']}/></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              
            <Button colorScheme='blackAlpha' onClick={() => window.location.replace("/#")}>Home</Button>
            <Button colorScheme='blackAlpha'onClick={() => window.location.replace("/#boxes")}>Audits</Button>
            <Button colorScheme='blackAlpha'onClick={() => window.location.replace("/#prices")}>Prices</Button>

            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              bg='#086F83'
              color='white'
              maxW={['75%', null, null, null, '100%']}
              ml="30px"
              fontSize={['10px', null, null, null, '100%']}
              leftIcon={<AddIcon />}
              _hover={{ bg: '#1c8ca2'}}>
              <Link isExternal href={'https://tcj29s11ect.typeform.com/to/byJd7PeS'}>
              Request An Audit
              </Link>

            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
            <Button colorScheme='blackAlpha' onClick={() => window.location.replace("/#")}>Home</Button>
            <Button colorScheme='blackAlpha'onClick={() => window.location.replace("/#boxes")}>Audits</Button>
            <Button colorScheme='blackAlpha'onClick={() => window.location.replace("/#prices")}>Prices</Button>

            </Stack>
          </Box>
        ) : null}
      </Box>
      <Content />
      
    </>
  );
}

export default Navbar