import { Input, Select, FormControl, useColorModeValue, InputGroup, InputLeftElement, Icon } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

export const Search = ({searchCountries, searchInput, setCountries}) => {

  const regions = [
    {
      name: "Africa"
    },
    {
      name: "America"
    },
    {
      name: "Asia"
    },
    {
      name: "Europe"
    },
    {
      name: "Oceania"
    },
  ]

  const fetchCountryByRegion = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`)
    const data = await res.json()
    setCountries(data)
    // console.log(data);
  }

  const bgColor = useColorModeValue('white', 'gray.700');
  const color = useColorModeValue('black', 'white');

  return(
    <FormControl display="flex" w="100%" p="2rem" alignItems={ {base:'left', lg:'center'} } flexDirection={ {base:'column', lg:'row'} } justifyContent={ {base:'left', lg:'space-between'} }>

      <InputGroup as="section" mb={ {base:'1rem', lg:'0'} }>
        <InputLeftElement
        pointerEvents="none" 
        children={<Icon as={FaSearch} 
        color={color} />} />
        
        <Input 
        w={ {base:'100%', lg:'280px'} }
        autoComplete="off" 
        placeholder="Seach for a country..." 
        name="search" 
        id="search" 
        value={searchInput} 
        onChange={(e) => searchCountries(e.target.value)} />
      </InputGroup>

      <Select
      w="190px"
      bgColor={bgColor}
      color={color}
      placeholder="Filter by Region" 
      value={regions.name}
      onChange={(e) => fetchCountryByRegion(e.target.value)}>
        
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Ocenia</option>

      </Select>
    
    </FormControl>
  )
}
