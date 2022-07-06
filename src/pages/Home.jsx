import { Routes, Route } from 'react-router-dom';

import { Box, useColorModeValue } from '@chakra-ui/react';
import { Navbar } from '../components/navbar/Navbar';
import { AllCountries } from '../components/countries/AllCountries';
import { CountryDetails } from '../components/countries/CountryDetails';

function App() {

  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Box w="100%" h="100vh" bgColor={bgColor}>
      <Navbar />
      <Routes>
        <Route path="/" element={ <AllCountries /> } />
        <Route path="country/:countryName" element={<CountryDetails /> } />
      </Routes>
    </Box>
  )
}

export default App
