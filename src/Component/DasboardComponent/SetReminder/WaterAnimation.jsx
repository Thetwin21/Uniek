import { Box, Container, Flex, keyframes, Text } from '@chakra-ui/react';
import React from 'react';
// import { Box, Container, keyframes } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes` 
25% {
    top: 0;
    border-radius: 100% 5% 100% 100%;
    transform: rotate(-45deg);
  }
  50% {
    top: 0;
    transform: rotate(0deg);
    border-radius: 100%;
  }
    100% {
    top: 0;
    border-radius: 100% 5% 100% 100%;
    transform: rotate(-45deg);
  }
`;
const before = keyframes`
0% {
    width: 150px;
    height: 150px;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 500px;
    height: 500px;
    top: -20%;
    opacity: 0;
  }
`;

const animation = `${animationKeyframes} 4s forwards infinite`;
const beforeAnimate = `${before} 2s ease-out infinite`;
const WaterAnimation = () => {
  return (
    <Container
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      m="auto"
      h="200px"
      w="200px"
      bg="yellow"
    >
      <Box
        as={motion.div}
        animation={animation}
        position="absolute"
        w="100%"
        h="100%"
        right="0"
        left="0"
        borderRadius="100% 5% 100% 100%"
        transform="rotate(-45deg)"
        bg="deepskyblue"
      />
      <Text
        w="100%"
        position="absolute"
        alignSelf={'center'}
        justifySelf="center"
        fontSize="4xl"
        color="#fff"
        right="0"
        left="0"
        m="auto"
        zIndex="50"
      >
        Drink Water
      </Text>
    </Container>
  );
};

export default WaterAnimation;
