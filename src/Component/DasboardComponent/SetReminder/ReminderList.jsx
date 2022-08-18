import { Box, Flex, List, ListItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ReminderList = ({ details }) => {
  // console.log(details)
  return (
    <Box mt={'4'} display='grid' gridTemplateColumns={'1fr 1fr'} gap='2'>
      {details ? details.map(data => {
        return (
          <Stack>
            <Box display={'flex'} flexDirection='column' w={{ base: '100%', md: '200px', lg: '270px' }} bg='#fff' p='2' pl='6' borderRadius={'10px'}>
              <Text>{data.text}</Text>
              <Text>{data.date}</Text> 
            </Box>
          </Stack>
        );
      }) : <Text fontSize='4xl' width={'100%'}>No List Available</Text>}
    </Box>
  );
};

export default ReminderList;
