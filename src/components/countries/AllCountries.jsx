import { useState, useEffect } from 'react';
import { Grid, Spinner } from '@chakra-ui/react';


import * as API from '../../services/GetCountries';
import { CountryCard } from './CountryCard';
import { Search } from '../inputs/Search';


export const AllCountries = () => {

  const [country, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    API.getAllCountries().then(setCountries).catch(err => console.error(err));
  }, [])

  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if(searchInput) {
      const filteredCountries = country.filter((country) => (
        Object.values(country).join("").toLowerCase().includes(searchValue.toLowerCase())
      ))
      setFiltered(filteredCountries)
    } else {
      setFiltered(country)
    }
  }

  return (
    <>
      {country.length == 0 ? (
        <Grid
          as="main"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          p="1rem"
          gap="15px"
          position="relative"
        >
          <Spinner
            size="lg"
            color="blue"
            position="absolute"
            top="100%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Grid>
      ) : (
        <> 
          <Search searchCountries={searchCountries} searchInput={searchInput} setCountries={setCountries} country={country} />
          {searchInput.length > 0 ? (
            <Grid
              as="main"
              h="100vh"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              p={{ md: "2rem", lg: "2rem" }}
              gap={{ base: "30px", md: "15px", lg: "15px" }}
              justifyItems={{ base: "center" }}
              position="relative"
            >
              {filtered.map((country) => (
                <CountryCard key={country.name.common} {...country} />
              ))}
            </Grid>
          ) : (
            <Grid
              as="main"
              h="100vh"
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              p={{ md: "2rem", lg: "2rem" }}
              gap={{ base: "30px", md: "15px", lg: "15px" }}
              justifyItems={{ base: "center" }}
              position="relative"
            >
              {country.map((country) => (
                <CountryCard key={country.name.common} {...country} />
              ))}
            </Grid>
          )}
        </>
      )}
    </>
  );
}

