import React, { useState } from 'react';
import {
  Flex,
  Grid,
  Image,
  Box,
  Text,
  Button,
  Link
} from '@chakra-ui/react';
import Image1 from '../Assets/health4.png';
import Image2 from '../Assets/health3.png';
import { ArrowRightIcon } from '@chakra-ui/icons';
import Login from './Login';

const SecondSlide = () => {
  
  const [loginState, changeToLogin] = useState(true);

  return (
    loginState ?
    <Box h="100vh" p="8" bg="#e9f1f2" color="#000" overflow={{lg: 'hidden'}}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="70px"
        h="70px"
        // bg="rgb(37, 150, 190)"
        bg="#1e8794"
        borderRadius="10px"
      >
        <Text fontSize="2xl" fontWeight="bold" color="#deffff">
          Uniek
        </Text>
      </Box>
      <Grid h={{ lg: 'calc(100vh - 120px)' }} gridTemplateColumns="1fr 1fr">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth={{ lg: '600px' }}
          h="400px"
        >
          <Text fontSize="5xl" fontWeight="bold" top="20%">
            A Sickle And A Warrior
          </Text>
          <Text fontSize="2xl" fontWeight="semibold" color="#02191c">
            Sickle Cell is not a limitation . You can break every limit you
            want, because you are a warrior.
          </Text>
        </Box>
        <Flex flexDirection="column" >
          <Flex h={'300px'} w="500px" bg="transparent" position="relative">
            <Box
              position="absolute"
              border={`2px solid #8989`}
              top="20%"
              right="40%"
              w="50%"
              h="70%"
              borderRadius="50%"
              zIndex="1"
            ></Box>
            <Box
              borderRadius="50%"
              w="200px"
              h="200px"
              overflow="hidden"
              zIndex={2}
            >
              <Image src={Image1} w="100%" h="100%" />
            </Box>
            <Box
              alignSelf="flex-end"
              justifySelf="flex-end"
              borderRadius="50%"
              w="200px"
              h="200px"
              overflow="hidden"
              zIndex={2}
            >
              <Image src={Image2} w="100%" h="100%" />
            </Box>
          </Flex>
          <Box w="100%">
            <Button 
            // _hover={{ width: '118px' }}
                onClick={()=> changeToLogin(false)}
                w="120px"
                borderRadius="10px"
                fontSize="lg"
                p="4" pt='2' pb='2'
                bg="teal"
                fontWeight="semibold"
                color="#fff"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                Next <ArrowRightIcon />
            </Button>
          </Box>
        </Flex>
      </Grid>
    </Box>
    : 
    <Login />
  );
};

export default SecondSlide;
