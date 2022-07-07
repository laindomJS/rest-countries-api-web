import { Heading, Text, Button, Flex, Image, Grid, GridItem, Spinner, Box, Icon } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';   

import { useParams, Link } from 'react-router-dom';

import { getCountry } from '../../services/GetCountries';

export const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    getCountry(countryName).then(setCountry).catch(err => console.error(err));
  }, [countryName])


  
  return  (
    <>
      <Link to="/">
        <Button as={motion.button} m={ {base:'2rem', lg:'4rem'} } w="120px" boxShadow="lg" whileHover={ {y:"5px", scale:1.1} } transition=".1s ease">
          <Flex alignItems="center" fontWeight="normal">
            <Icon as={FaArrowLeft} mr=".5rem" />
            <Text>Back</Text>
          </Flex>
        </Button>
      </Link>
      
      {country.length == 0 ? (<Box position="relative" w="100%">
        <Spinner size="lg" color='blue' position="absolute" top="100%" left="50%" transform="translate(-50%, -50%)" />
      </Box>) : (
        <Box w="100%">
          {country.map((country) => (
            <Flex alignItems="center" px={ {lg:'4rem'} } flexDir={ {base:'column', lg:'row'} }>
              <Image ml={ {base:'5rem'} } src={country.flags.svg} w={ {base:'330px', lg:'390px'} } boxShadow="dark-lg" mr="5rem" />
              <Box>
                <Heading fontSize="30px" mt={ {base:'2rem', lg:'0'} } ml={ {base:'1rem', lg:'0'} } mb="1.5rem">{country.name.common}</Heading>
                <Grid templateColumns={ {base:'repeat(1, 1fr)', lg:'repeat(2, 1fr)'} } gap="5px" w={ {base:'100vw', lg:'100%'} } mb={ {base:'1.5rem', lg:'0'} } p={ {base:'1rem', lg:'0'} }>
                  <GridItem>
                    <Text mb=".8rem"><strong>Native Name</strong>: {Object.values(country.name.nativeName).map((key) => (
                      String(key.common + ', ')
                    ))}</Text>
                    <Text mb=".8rem"><strong>Population</strong>: {country.population.toLocaleString()}</Text>
                    <Text mb=".8rem"><strong>Region</strong>: {country.region}</Text>
                    <Text mb=".8rem"><strong>Sub Region</strong>: {!country.subregion ? 'No SubRegion' : country.subregion}</Text>
                    <Text mb=".8rem"><strong>Capital</strong>: {!country.capital ? 'No Capital' : country.capital}</Text>
                  </GridItem>
                  <GridItem>
                    <Text mb=".8rem"><strong>Top Level Domain</strong>: {!country.tld ? 'No TLD' : country.tld}</Text>
                    <Text mb=".8rem"><strong>Currencies</strong>: 
                      {country.currencies[Object.keys(country.currencies)].name}
                    </Text>
                    <Text mb=".8rem"><strong>Languages</strong>: {Object.values(country.languages).join(", ")} </Text>
                  </GridItem>
                </Grid>
              </Box>
            </Flex>
          ))}
        </Box>
        )}
    </>
  )
}