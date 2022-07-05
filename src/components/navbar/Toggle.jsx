import { Text, Button, Box, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export const Toggle = () => {
  return(
    <Button
    as={motion.button}
    w="140px"
    h="35px"
    fontSize="18px"
    fontWeight="normal"
    variant="ghost"
    whileHover={ {scale:0.8} }
    transition=".1s ease">

      <Box display="flex" alignItems="center">
        <Icon as={FaMoon} />
        <Text ml=".5rem">Dark Mode</Text>
      </Box>

    </Button>
  )
}