import { Flex, Heading } from '@chakra-ui/react';
import { Toggle } from './Toggle';

export const Navbar = () => {
  return(
    <Flex p="2rem" justifyContent="space-between" alignItems="center" bgColor="white" boxShadow="lg">
      <Heading fontWeight="bold">Where in the world?</Heading>
      <Toggle />
    </Flex>
  )
}