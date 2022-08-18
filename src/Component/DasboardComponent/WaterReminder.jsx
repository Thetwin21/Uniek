import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../Sidebar'
import WaterAnimation from './SetReminder/WaterAnimation'
import WaterList from './SetReminder/WaterList'

const WaterReminder = () => {
  return (
    <Flex bg='#e9f1f2' h='100%' >
        <Sidebar />
        <Flex position='relative' h='280px' m='6'>
          {/* <WaterAnimation /> */}
          <WaterList />
        </Flex>
    </Flex>
  )
}

export default WaterReminder