import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { Toggle } from './Toggle';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return(
    <Flex as="nav" p={ {base:'1rem', md:'2rem', lg:'2rem'} } color={color} justifyContent="space-between" alignItems="center" bgColor={bgColor} boxShadow="lg">
     <Link to="/" onClick={() => window.location.reload()}>
      <Heading fontSize={ {base:'16px', lg:'25px'} } fontWeight="bold">Where in the world?</Heading>
     </Link>
      <Toggle />
    </Flex>
  )
}