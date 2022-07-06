import { Heading, Text, Button, Flex, Image, Grid, GridItem, Spinner } from '@chakra-ui/react';
import { useState, useEffect } from 'react';   

import { useParams } from 'react-router-dom';

import { getCountry } from '../../services/GetCountries';

export const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    getCountry(countryName).then(setCountry).catch(err => console.error(err));
  }, [countryName])
  
  return  (
    <>
      {country.map((country) => (
        <Heading>{country.name.common}</Heading>
      ))}
    </>
  )


}