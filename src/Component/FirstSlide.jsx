import React, { useState } from 'react';
import {
  chakra,
  Box,
  Text,
  Link
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { motion, isValidMotionProp } from 'framer-motion';
import SecondSlide from './SecondSlide';
const Bounce = chakra(motion.div, {
  forwardedProp: prop => isValidMotionProp(prop) || prop === 'children',
});
const ChakraBox = chakra(motion.div, {
  forwardedProp: prop => isValidMotionProp(prop) || prop === 'children',
});

const FirstSlide = () => {
  const [loadState, changeLoadState] = useState(true);

  setInterval(() => {
    changeLoadState(false)
  }, 5000);


  return (
    loadState ?
    <Box
      bg="#e9f1f2"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100vh"
    >
      <Box>
        <Bounce
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            duration: 3,
            type: 'spring',
            stiffness: 260,
            damping: 20,
            ease: 'easeInOut',
          }}
        >
          <Box
            display="flex"
            mb="2rem"
            justifyContent="center"
            alignItems="center"
            w="200px"
            h="200px"
            // bg="rgb(37, 150, 190)"
            bg="#1e8794"
            borderRadius="10px"
          >
            <Text fontSize="6xl" fontWeight="bold" color="#deffff">
              Uniek
            </Text>
          </Box>
        </Bounce>
        <ChakraBox whileTap={{ scale: 0.8, rotate: -10, borderRadius: '100%' }}>
          <Box display="flex" w="100%" alignItems="center">
            <Box
              border={`4px solid rgb(37, 150, 190)`}
              w="100px"
              h="50px"
              borderRadius="50%"
            ></Box>
            {/* <Link href="/secondslide" color="#0c3136" textAlign="end" w="100%">
              <ArrowForwardIcon />
              Get Started
            </Link> */}
          </Box>
        </ChakraBox>
      </Box>
    </Box> :
    <SecondSlide />
  );
};

export default FirstSlide;
