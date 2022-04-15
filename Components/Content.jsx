import React from 'react'
import Hero from '../Components/Hero'
import SupportedC from '../Components/SupportedChains'

import Boxes from '../Components/Boxes'


import { Text, Center } from '@chakra-ui/react'

const Content = () => {
  return (
    <>
        <Hero />
        <SupportedC />
        <Boxes />
    </>
  )
}

export default Content