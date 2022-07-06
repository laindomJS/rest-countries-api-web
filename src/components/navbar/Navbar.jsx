import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Toggle } from './Toggle';

export const Navbar = () => {

  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return(
    <Flex p={ {base:'1rem', md:'2rem', lg:'2rem'} } color={color} justifyContent="space-between" alignItems="center" bgColor={bgColor}boxShadow="lg">
      <Heading fontSize={ {base:'16px', lg:'25px'} } fontWeight="bold">Where in the world?</Heading>
      <Toggle />
    </Flex>
  )
}