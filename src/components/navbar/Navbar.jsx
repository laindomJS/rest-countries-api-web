import { Flex, Heading } from '@chakra-ui/react';
import { Toggle } from './Toggle';

export const Navbar = () => {
  return(
    <Flex p={ {base:'1rem', md:'2rem', lg:'2rem'} } justifyContent="space-between" alignItems="center" bgColor="white" boxShadow="lg">
      <Heading fontSize={ {base:'16px'} } fontWeight="bold">Where in the world?</Heading>
      <Toggle />
    </Flex>
  )
}