import { Heading, Text, Button, Flex, Image, Grid, GridItem, Spinner, Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';   

import { useParams } from 'react-router-dom';

import { getCountry } from '../../services/GetCountries';
import { ButtonBack } from './ButtonBack';

export const CountryDetails = () => {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    getCountry(countryName).then(setCountry).catch(err => console.error(err));
  }, [countryName])

  return (
    <>

      <ButtonBack />

      {country.length == 0 ? (
        <Box position="relative" w="100%" as="main">
          <Spinner
            size="lg"
            color="blue"
            position="absolute"
            top="100%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>
      ) : (
        <Box w="100%" as="main">
          {country.map((country) => (
            <Flex
              alignItems="center"
              px={{ lg: "4rem" }}
              flexDir={{ base: "column", lg: "row" }}
            >
              <Image
                ml={{ base: "5rem" }}
                src={country.flags.svg}
                w={{ base: "330px", lg: "390px" }}
                boxShadow="dark-lg"
                mr="5rem"
              />

              <Box as="section">
                <Heading
                  as="h2"
                  fontSize="30px"
                  mt={{ base: "2rem", lg: "0" }}
                  ml={{ base: "1rem", lg: "0" }}
                  mb="1.5rem"
                >
                  {country.name.common}
                </Heading>

                <Grid
                  as="section"
                  templateColumns={{
                    base: "repeat(1, 1fr)",
                    lg: "repeat(2, 1fr)",
                  }}
                  gap="5px"
                  w={{ base: "100vw", lg: "100%" }}
                  mb={{ base: "1.5rem", lg: "0" }}
                  p={{ base: "1rem", lg: "0" }}
                >
                  <GridItem>
                    <Text mb=".8rem">
                      <strong>Native Name</strong>: {""}
                      {
                        Object.values(country.name.nativeName)[
                          Object.values(country.name.nativeName).length - 1
                        ].common
                      }
                    </Text>
                    <Text mb=".8rem">
                      <strong>Population</strong>:{" "}
                      {country.population.toLocaleString()}
                    </Text>
                    <Text mb=".8rem">
                      <strong>Region</strong>: {country.region}
                    </Text>
                    <Text mb=".8rem">
                      <strong>Sub Region</strong>:{" "}
                      {!country.subregion ? "No SubRegion" : country.subregion}
                    </Text>
                    <Text mb=".8rem">
                      <strong>Capital</strong>:{" "}
                      {!country.capital ? "No Capital" : country.capital}
                    </Text>
                  </GridItem>
                  <GridItem>
                    <Text mb=".8rem">
                      <strong>Top Level Domain</strong>:{" "}
                      {!country.tld ? "No TLD" : country.tld}
                    </Text>
                    <Text mb=".8rem">
                      <strong>Currencies</strong>:{" "}
                      {Object.entries(country.currencies).map(
                        ([key, value]) => value.name
                      )}
                    </Text>
                    <Text mb=".8rem">
                      <strong>Languages</strong>:{" "}
                      {Object.values(country.languages).join(", ")}{" "}
                    </Text>
                  </GridItem>
                </Grid>
                <Flex
                  flexDirection={{ base: "column", lg: "row" }}
                  as="section"
                  mt="2rem"
                  w="100%"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <Heading
                    as="h3"
                    mb={{ base: "1rem", lg: "0" }}
                    fontWeight="normal"
                    fontSize="18px"
                  >
                    Border Countries:{" "}
                  </Heading>
                  {!country.borders ? (
                    <Heading as="h3" fontSize="18px" fontWeight="normal">
                      This Country not have borders
                    </Heading>
                  ) : (
                    country.borders.map((country) => (
                      <Button
                        ml="2rem"
                        mt="1rem"
                        mr={{ base: "2rem", lg: "0" }}
                        mb={{ base: "1rem", lg: "0" }}
                        boxShadow="lg"
                        w="100px"
                        key={country}
                      >
                        {country}
                      </Button>
                    ))
                  )}
                </Flex>
              </Box>
            </Flex>
          ))}
        </Box>
      )}
    </>
  );
}