import { Box, useColorModeValue } from '@chakra-ui/react';
import { Navbar } from '../components/navbar/Navbar';
import { AllCountries } from '../components/countries/AllCountries';

function App() {

  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box w="100%" h="100vh" bgColor={bgColor}>
      <Navbar />
      <AllCountries />
    </Box>
  )
}

export default App
