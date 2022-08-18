import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Motivate from './Motivate';
import ReminderList from './SetReminder/ReminderList';
import reminder from '../DasboardComponent/SetReminder/WaterImage/3864729.jpg';
import drinkWater from '../DasboardComponent/SetReminder/WaterImage/7622526.jpg';
import pharmacy from '../DasboardComponent/SetReminder/WaterImage/online pharmacy.jpg';
import hospital from '../DasboardComponent/SetReminder/WaterImage/doctor_2.jpg';
const Home = () => {
  return (
    <Grid
      maxHeight="100%"
      w="100%"
      templateAreas={`'col1 col2' 'col3 col4' 'col5 col4'`}
      templateColumns="repeat(2,1fr)"
      templateRows="repeat(2,1fr)"
      m={'0 6'}
      p="4"
      overflowY="auto"
      gap="8"
    >
      <GridItem
        gridArea="col1"
        boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
        bg="#fff"
        height={'200px'}
        borderRadius="10px"
        _hover={{ bg: '#ffe' }}
      >
        <Link
          href="/checkups"
          w="100%"
          h="100%"
          _hover={{ textDecoration: 'none' }}
        >
          <Box w="100%" h="100%" display={'flex'}>
            <Image src={drinkWater} h="100%" w="40%" />
            <Flex flexDirection={'column'} pt="4" pl="2">
              <Text as="h3" fontFamily={`'Oleo Script Swash Caps', cursive;'`}>
                Drink Water
              </Text>
              <Text>Reminder to drink water</Text>
              <Text>Notification To Take Your Medicine</Text>
              <Text>Know Your Daily Water Intake</Text>
            </Flex>
          </Box>
        </Link>
      </GridItem>
      <GridItem
        gridArea="col2"
        boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
        bg="#fff"
        height={'200px'}
        borderRadius="10px"
        _hover={{ bg: '#ffe' }}
      >
        <Link
          href="/checkups"
          w="100%"
          h="100%"
          _hover={{ textDecoration: 'none' }}
        >
          <Box w="100%" h="100%" display={'flex'}>
            <Image src={reminder} h="100%" w="40%" />
            <Flex flexDirection={'column'} pt="4" pl="2">
              <Text as="h3" fontFamily={`'Oleo Script Swash Caps', cursive;'`}>
                CheckUps
              </Text>
              <Text>Clinic days </Text>
              <Text>Doctor's bookings</Text>
              <Text>Meetings</Text>
            </Flex>
          </Box>
        </Link>
      </GridItem>
      <GridItem
        gridArea="col3"
        boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
        bg="#fff"
        height={'200px'}
        borderRadius="10px"
      >
        <Link
          href="/checkups"
          w="100%"
          h="100%"
          _hover={{ textDecoration: 'none' }}
        >
          <Box w="100%" h="100%" display={'flex'}>
            <Image src={pharmacy} h="100%" w="40%" />
            <Flex flexDirection={'column'} pt="4" pl="2">
              <Text as="h3" fontFamily={`'Oleo Script Swash Caps', cursive;'`}>
                Online Pharmacy
              </Text>
              <Text>Buy your drugs</Text>
              <Text>Easy payment</Text>
              <Text>Delivery To Your Doorsteps</Text>
            </Flex>
          </Box>
        </Link>
      </GridItem>
      <GridItem
        gridArea="col4"
        boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
        bg="#fff"
      >
        <Flex
          flexDirection="column"
          p="4"
          alignItems={'center'}
          w="100%"
          h="100%"
        >
          <Heading as={'h3'}>Reminders</Heading>
          <ReminderList />
        </Flex>
      </GridItem>
      <GridItem
        gridArea="col5"
        boxShadow=" 0 4px 12px 0px rgba(0,0,0,0.25)"
        bg="#fff"
        height={'200px'}
        borderRadius="10px"
      >

        <Link
          href="/checkups"
          w="100%"
          h="100%"
          _hover={{ textDecoration: 'none' }}
        >
          <Box w="100%" h="100%" display={'flex'}>
            <Image src={hospital} h="100%" w="40%" />
            <Flex flexDirection={'column'} pt="4" pl="2">
              <Text as="h3" fontFamily={`'Oleo Script Swash Caps', cursive;'`}>
                Call The Hospital
              </Text>
              <Text>Call Your Doctor</Text>
              <Text>Request for ambulance</Text>
              <Text>Hospital Near You</Text>
            </Flex>
          </Box>
        </Link>
      </GridItem>
      
    </Grid>
  );
};

export default Home;
