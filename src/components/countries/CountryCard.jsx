import { GridItem, Box, Image, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const CountryCard = country => {

  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return(
    <GridItem as={motion.article}
    borderRadius="8px"
    mt={ {base:'2rem'} }
    bgColor={bgColor}
    color={color}
    w="310px"
    h="fit-content"
    overflow="hidden"
    boxShadow="lg"
    whileHover={{ scale: 0.8 }}
    transition=".2s ease">

      <Image src={country.flags.svg} w="100%" />
      
      <Box mt=".8rem" p="1rem">
        <Heading fontSize="28px" mb=".4rem">{country.name.common}</Heading>
        <Text>Population: {country.population}</Text>  
        <Text>Region: {country.region}</Text>
        <Text>Capital: {country.capital}</Text>
      </Box>

    </GridItem>
  )
}