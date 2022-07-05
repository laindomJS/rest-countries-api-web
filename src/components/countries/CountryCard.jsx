import { GridItem, Box, Image, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const CountryCard = country => {
  return(
    <GridItem as={motion.article}
    borderRadius="8px"
    bgColor="white"
    w="290px"
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