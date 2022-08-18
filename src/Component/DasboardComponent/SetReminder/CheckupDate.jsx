import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  Text,
  useStyleConfig,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar';
import ReminderList from './ReminderList';

const CheckupDate = () => {
  const [checkupDate, setCheckupDate] = useState(null);
  const [checkupText, setCheckupText] = useState(null);
  const [details, setDetails] = useState([]);

  // fetching data from input
  const fetchInputData = () => {
    if (checkupDate !== null && checkupText !== null) {
      setDetails(prevValue => [
        ...prevValue,
        { text: checkupText, date: checkupDate }
      ]);
    }
  };
  // onSubmit function
  const onSubmit = e => {
    e.preventDefault();
    fetchInputData();
    setCheckupDate(null);
    setCheckupText(null);

  };
  useEffect(() => {
    fetchInputData();
  }, []);
console.log(details)
  return (
    <Flex bg="#e9f1f2" color="#000" h="100vh" gap="6" >
      <Sidebar />
      <Flex flexDirection={{base: 'column', lg: 'row'}}>
      <Flex flexDirection={'column'} p="6"> 
      <form w="400px" onSubmit={onSubmit}>
        <FormControl  justifySelf={'center'}>
          <FormLabel>Add Checkup Date </FormLabel>
          <Input
            bg="#fff"
            border="1px solid #18c4a8"
            _placeholder={{
              color: 'gray.500',
            }}
            placeholder="Tour checkup date"
            type="text"
            autoComplete="none"
            variant={{ color: 'outline' }}
            onChange={e => setCheckupText(e.target.value)}
          />
          <Input
            type="date"
            variant={{ color: 'outline' }}
            bg="#fff"
            border="1px solid #18c4a8"
            _placeholder={{
              color: 'gray.500',
            }}
            mt="2"
            mb="2"
            onChange={e => setCheckupDate(e.target.value)}
          />
          <Button
            type="submit"
            w="120px"
            borderRadius="10px"
            fontSize="lg"
            p="2"
            bg="teal"
            fontWeight="semibold"
            color="#fff"
            _hover={{
              textDecoration: 'none',
            }}
          >
            Enter
          </Button>
        </FormControl>
      </form>
      <ReminderList details={details} />
     </Flex>
     <Box p='4' mt='2'>
     <Text>set reminder on days of your checkup</Text>
     <Heading as='h3'>How To Set Reminder</Heading>
     <List gap='2'>
      <listItem>Type in the reason for your visit in the input box</listItem>
      <listItem>Selete/Set Date of your visit(Checkup) </listItem>
      <listItem>Then, Hit the Button</listItem>
     </List>
     </Box>
      </Flex>
      
    </Flex> 
  );
};

export default CheckupDate;
