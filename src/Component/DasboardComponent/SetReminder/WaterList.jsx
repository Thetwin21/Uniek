import { Flex, Image } from '@chakra-ui/react'
import React from 'react';
import water from '../SetReminder/WaterImage/waterb.png'

const WaterList = () => {
  return (
    <Flex>
        <Image w='100px' h='150px' src={water} dropShadow='0 0 0.75 red'/>
    </Flex>
  )
}

export default WaterList