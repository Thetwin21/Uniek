import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import Dashboard from './DasboardComponent/Dashboard';

const Login = () => {
  
  const [dashboardState, changeToDasboard] = useState(true);

  return (
    dashboardState ?
    <Flex bg="#fff" mt={'none'} w="100%" h="100vh">
      <Box
        w={['full', 'md']}
        h={['','420px']}
        p={[8, 10]}
        mt={[20, '10vh']}
        border={['none', '1px']}
        borderColor={['', 'gray.300']}
        mx="auto"
        borderRadius="10px"
      >
        <VStack spacing={4} align="center " w="full" color="#000">
          <VStack w="full" align={['flex-start', 'center']}>
            <Heading>Login</Heading>
            <Text>Login with your email and password</Text>
          </VStack>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="username"
              _placeholder={{ color: 'teal.900' }}
              type="text"
              rounded={'none'}
              autoComplete='none'
              bg="gray.100"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              _placeholder={{ color: 'teal.900' }}
              type="password"
              rounded={'none'}
              bg="gray.100"
              // color="#000"
            />
          </FormControl>
          <HStack w="full" justify="space-between">
            <Checkbox border='gray'>Remember me.</Checkbox>
            <Button variant="link" colorScheme="blue">
              Forgot Password
            </Button>
          </HStack>
          <Button
            rounded="none"
            colorScheme="blue"
            borderRadius='5px'
            alignSelf="flex-end"
            w={['full', 'auto']}
          >
            Login
          </Button>
      <Link href='/dashboard'>Clickme</Link>
        </VStack>
      </Box>
    </Flex>
    : 
    <Dashboard />
  );
};

export default Login;

