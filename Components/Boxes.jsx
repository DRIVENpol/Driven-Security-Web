import React from 'react'

import { Text, Center, Grid, GridItem, Box } from '@chakra-ui/react'
import { Avatar, Stack, Badge, Button, Link, HStack } from '@chakra-ui/react'
import { AttachmentIcon, FaFacebook, FaTwitter } from '@chakra-ui/icons';

const projects = [
{
  name: 'Bitcoin',
  type: 'Metaverse',
  link: 'https://www.drivenx.finance/wp-content/uploads/2021/12/NEW-TOKEN.png',
  chain: 'ETH',
  auditType: 'TECHNICAL AUDIT',
  githubLink: 'https://www.drivenx.finance/wp-content/uploads/2021/12/NEW-TOKEN.png'
},

{
  name: 'Bitcoin',
  type: 'Metaverse',
  link: 'https://www.drivenx.finance/wp-content/uploads/2021/12/NEW-TOKEN.png',
  chain: 'ETH',
  auditType: 'TECHNICAL AUDIT',
  githubLink: 'https://www.drivenx.finance/wp-content/uploads/2021/12/NEW-TOKEN.png'
},



]

const Boxes = () => {
  return (
    <>

<Center>
    <Text color='black' fontSize='3xl' mt='20px'><b>Our latest audits</b></Text>
    </Center>
    <Center><Text color={'grey'} align='center'>
          Check our latest audits
        </Text></Center><br/>
    <Center>
    <Grid templateColumns={['repeat(1, 1fr)', null, 'repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={6} w='75%' mb='6px'>

    {projects && projects.map(project => (
       <div key={project.id}>
       <GridItem w='100%' h='10' align='center' mb='170px'>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' alignContent={'center'}>
        <Stack direction='row' alignItems='baseline'>
            <Avatar mt='5%' ml='2%' src={project.link} />
            <div>
            <Badge colorScheme='green' mt='-35%'>
        {project.auditType}
      </Badge>
            </div>

   </Stack>
    
    <Stack direction='column' ml='4%' mb='5%' mt='5%'>  
        <Text align='left' fontSize={'14px'}><b>Project Name: </b>{project.name}</Text>
        <Text align='left' fontSize={'14px'}><b>Project Type: </b>{project.type}</Text>
        <Text align='left' fontSize={'14px'}><b>Chain: </b>{project.chain}</Text>
        <Stack direction='row' ml='2%' mb='5%' mt='5%'> 
        <Button
              variant={'solid'}
              bg='#000b22'
              color='white'
              w='50%'
              size={'sm'}
              mr={1}
              leftIcon={<AttachmentIcon />}
              _hover={{ bg: '#17294e'}}>
              <Link isExternal href={project.githubLink}>
              See Audit
              </Link>
            </Button>
            <Text>On Github</Text>
            </Stack>
            </Stack>
            

    </Box>
    </GridItem>
       </div>
   ))}
<br />

    </Grid>
   </Center><br /><br />
    </>
  )
}

export default Boxes