import React from 'react'

import { Text, Center, Grid, GridItem, Box, Container } from '@chakra-ui/react'
import { Avatar, Stack, Badge, Button, Link, HStack } from '@chakra-ui/react'
import { AttachmentIcon, FaFacebook, FaTwitter } from '@chakra-ui/icons';

const projects = [
{
  name: 'TCG',
  type: 'Metaverse',
  link: 'https://www.drivenx.finance/wp-content/uploads/2022/02/TCG-drivenlock.png',
  chain: 'BSC & ETH',
  auditType: 'FULL',
  githubLink: 'https://github.com/DRIVENx/DRIVENsecurity-audits/blob/main/DRIVENsecurity_TCG_Fundamental_2022.pdf'
},

{
  name: 'JoinCoin',
  type: 'Staking',
  link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18733.png',
  chain: 'BSC',
  auditType: 'TECHNICAL',
  githubLink: 'https://github.com/DRIVENx/DRIVENsecurity-audits/blob/main/JoinCoin_code.pdf'
},

{
  name: 'MINE',
  type: 'Utility',
  link: 'https://theofficialminetoken.io/wp-content/uploads/elementor/thumbs/cropped-logo-MCMT_120px-pii1f11vaz5bjvyertktwrn0wty3007rdga2em3s9a.png',
  chain: 'ETH',
  auditType: 'FULL',
  githubLink: 'https://github.com/DRIVENx/DRIVENsecurity-audits/blob/main/MINE_fundamental_code.pdf'
},
{
  name: 'EverRise',
  type: 'Utility',
  link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15257.png',
  chain: 'BSC',
  auditType: 'FUNDAMENTAL',
  githubLink: 'https://github.com/DRIVENx/DRIVENsecurity-audits/blob/main/EverRise_fundamental.pdf'
},
{
  name: 'Elitheum',
  type: 'Utility',
  link: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12320.png',
  chain: 'BSC',
  auditType: 'TECHNICAL',
  githubLink: 'https://github.com/DRIVENx/DRIVENsecurity-audits/blob/main/Elitheum_code.pdf'
}



]

const Boxes = () => {
  return (
    <>
<Container maxW={'100%'} bg='#000b22' mt='-20px' pt='5%' pb='2%'>
<Center>
    <Text color='white' fontSize='3xl' ><b>DRIVENsecurity audits</b></Text>
    </Center>
    <Center><Text color={'white'} align='center'>
          Check our latest audits
        </Text></Center><br/>
    <Center>
    <Grid color='white' templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={6} w='75%' mb='6px'>

    {projects && projects.map(project => (
       <div key={project.name} >
       <GridItem w='100%' h='10' align='center' mb='200px'>
    <Box maxW='sm' borderWidth='1px' borderColor={'#00fed9'} borderRadius='lg' alignContent={'center'}>
        <Stack direction='row' alignItems='baseline'>
            <Avatar mt='5%' ml='2%' src={project.link} />
            <div>
            {project.auditType ==='TECHNICAL' ? ( <Badge colorScheme='green' mt='-45%'>
        {project.auditType}
      </Badge>): 
      <>{project.auditType ==='FUNDAMENTAL' ? <Badge colorScheme='yellow' mt='-45%'>
        {project.auditType}
      </Badge>:<Badge colorScheme='blue' mt='-100%'>
        {project.auditType}
      </Badge>}</>}
           
            </div>

   </Stack>
    
    <Stack direction='column' ml='4%' mb='5%' mt='5%'>  
        <Text align='left' fontSize={'14px'}><b>Project Name: </b>{project.name}</Text>
        <Text align='left' fontSize={'14px'}><b>Project Type: </b>{project.type}</Text>
        <Text align='left' fontSize={'14px'}><b>Chain: </b>{project.chain}</Text>
        <Stack direction='row' ml='2%' mb='5%' mt='5%'> 
        <Button
              variant={'solid'}
              bg='#00fed9'
              color='black'
              w='50%'
              size={'sm'}
              mr={1}
              leftIcon={<AttachmentIcon />}
              _hover={{ bg: 'white',
              color:'black'}}>
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
   </Center><br /><br /></Container>
    </>
  )
}

export default Boxes