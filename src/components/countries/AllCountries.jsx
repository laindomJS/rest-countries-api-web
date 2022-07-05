import { useState, useEffect } from 'react';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import * as API from '../../services/GetCountries';
import { CountryCard } from './CountryCard';

export const AllCountries = () => {

  const [country, setCountries] = useState([]);

  useEffect(() => {
    API.getAllCountries().then(setCountries).catch(err => console.error(err));
  }, [])

  return(
    <>
      <Grid templateColumns="repeat(4, 1fr)" p="1rem" gap="15px" bgColor="gray.100">
        {country.map((country) => (
          <CountryCard key={country.name.common} {...country} />
        ))}
    </Grid>
    </>
  )
}

