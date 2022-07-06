import { Text, Button, Box, Icon, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Toggle = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  
  return(
    <Button
    as={motion.button}
    w="140px"
    h="35px"
    fontSize={ {base:'16px', md:'18px', lg:'18px'} } 
    fontWeight="normal"
    variant="ghost"
    whileHover={ {scale:0.8, fontWeight:'bold'} }
    onClick={toggleColorMode}
    transition=".1s ease">

      <Box display="flex" alignItems="center">
        <Icon as={colorMode === 'light' ? FaMoon : FaSun} />
        <Text ml=".5rem">Dark Mode</Text>
      </Box>

    </Button>
  )
}