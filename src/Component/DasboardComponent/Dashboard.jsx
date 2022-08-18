import { Spacer, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from '../Sidebar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../DasboardComponent/Home';

const Dashboard = () => {
  return (
    <Flex bg="#e9f1f2" color="#000" h={'100vh'}>
      <Sidebar />
      {/* <Spacer /> */}
      <Flex
        p="4"
        flexDirection={'column'}
        w="100%"
        h={{ base: '100%', lg: '100vh' }}
      >
        <Heading pl='6'>Dashboard</Heading>
        <Home />
      </Flex>
    </Flex>
  );
};

export default Dashboard;
