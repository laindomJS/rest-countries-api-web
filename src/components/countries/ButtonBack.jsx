import { Button, Flex, Icon, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

export const ButtonBack = () => {
  return(
    <Link to="/">
      <Button
        as={motion.button}
        m={{ base: "2rem", lg: "4rem" }}
        w="120px"
        boxShadow="lg"
        whileHover={{ y: "5px", scale: 1.1 }}
        transition=".1s ease">

        <Flex alignItems="center" fontWeight="normal">
          <Icon as={FaArrowLeft} mr=".5rem" />
          <Text>Back</Text>
        </Flex>

      </Button>
  </Link>
  )
}