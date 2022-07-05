import { Box } from '@chakra-ui/react';
import { Navbar } from '../components/navbar/Navbar';
import { AllCountries } from '../components/countries/AllCountries';

function App() {

  return (
    <Box w="100%">
      <Navbar />
      <AllCountries />
    </Box>
  )
}

export default App
