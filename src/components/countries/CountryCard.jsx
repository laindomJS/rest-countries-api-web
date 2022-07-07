import { GridItem, Box, Image, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CountryCard = country => {

  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return(
    <Link to={`/country/${country.name.common}`}>
      <GridItem as={motion.article}
      borderRadius="8px"
      mt={ {base:'2rem'} }
      bgColor={bgColor}
      color={color}
      w="280px"
      h="360px"
      overflow="hidden"
      boxShadow="lg"
      whileHover={{ scale: 0.8 }}
      transition=".2s ease">

        <Image src={country.flags.png} w="100%" h="180px" />
        
        <Box mt=".8rem" p="1rem">
          <Heading fontSize="22px" mb=".4rem">{country.name.common}</Heading>
          <Text><strong>Population</strong>: {country.population.toLocaleString()}</Text>  
          <Text><strong>Region</strong>: {country.region}</Text>
          <Text><strong>Capital</strong>: {!country.capital ? 'No Capital' : country.capital}</Text>
        </Box>

      </GridItem>
    </Link>
  )
}