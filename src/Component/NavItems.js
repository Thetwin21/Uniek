import {
  Flex,
  Menu,
  MenuButton,
  Text,
  Link,
  Icon
} from '@chakra-ui/react';
import React from 'react';

const NavItems = ({icon, active ,text, href}) => {
  return (
    <Flex
      mt='1'
      flexDir="column"
      w="100%"
      align={{ md: 'center', lg: 'flex-start' }}
    >
      <Menu placement="right">
        <Link href={href} background={active && '#aec8ca'} borderRadius='10px' p='2' _hover={{background: '#aea5ff'}} w={{lg : '100%'}}>
          <MenuButton>
            <Flex align='center'>
            <Icon as={icon} />
            <Text display={{md: 'none' ,lg: 'initial'}} ml='2'>{text}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
};

export default NavItems;
