import {
  Avatar,
  Divider,
  Flex,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdDashboard, GiHealthDecrease, GrBlog, AiFillSetting } from 'react-icons/all';
import React from 'react';
import { useState } from 'react';
import NavItems from './NavItems';

const Sidebar = () => {
  const [navSize, changeNavSize] = useState('large');
  return (
    <Flex
      display={{ base: 'none', md: 'flex' }}
      pos="sticky"
      h="95vh"
      mt="2.5vh"
      left="5"
      w={{ md: '75px', lg: '180px' }}
      boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
      flexDirection="column"
      justify="space-between"
      color='#000'
      bg='#ffe'
      borderRadius={'10px'}
    >
      <Flex p="5%" flexDir="column" alignItems={{base: 'center', lg: 'flex-start' }} as="nav">
        <NavItems icon={MdDashboard} text={'Dashboard'} href='/dashboard' />
        <NavItems icon={GiHealthDecrease} text={'Your Health'} href='/health' />
        <NavItems icon={GrBlog} text={'Blog'} href='/blog' />
        <NavItems icon={AiFillSetting} text={'Settings'} href='/setting' />
      </Flex>
      <Flex p="5%" flexDir="column" align={{base: 'center', lg: 'flex-start'}} mb="4" w="100%">
        <Divider display={{base: 'none', lg:'flex'}} />
        <Flex align="center" mt="4">
          <Avatar src="" size="sm"  />
          <Flex flexDir="column" ml="2" fontSize="15px" p="2" display={{base: 'none',lg: 'flex'}}>
            <Heading as="h3" size="sm" fontWeight="semibold" disp>
              username
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
