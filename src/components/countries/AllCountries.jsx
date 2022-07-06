import { useState, useEffect } from 'react';
import { Grid, Spinner } from '@chakra-ui/react';
import * as API from '../../services/GetCountries';
import { CountryCard } from './CountryCard';

export const AllCountries = () => {

  const [country, setCountries] = useState([]);

  useEffect(() => {
    API.getAllCountries().then(setCountries).catch(err => console.error(err));
  }, [])

  return(
    <>
      {country.length == 0 ? ( 
      <Grid templateColumns={ {base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:"repeat(4, 1fr)"} } p="1rem" gap="15px"  position="relative">
        <Spinner size="lg" color='blue' position="absolute" top="100%" left="50%" transform="translate(-50%, -50%)" />
      </Grid> ) 
      : (
        <Grid templateColumns={ {base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:"repeat(4, 1fr)"} } p={ {md:'2rem', lg:'2rem'} } gap={ {base:'30px', md:'15px', lg:'15px'} } justifyItems={ {base:'center'} } position="relative">
          {country.map((country) => (
            <CountryCard key={country.name.common} {...country} />
          ))}
      </Grid>
      )}
    </>
  )
}

