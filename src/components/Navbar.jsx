import { Box, Flex, Link as ChakraLink, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <ChakraLink as={Link} to="/" fontSize="xl" fontWeight="bold">Tech Forum</ChakraLink>
        <Spacer />
        <Button as={Link} to="/login" colorScheme="teal" variant="outline" mr={4}>Login</Button>
        <Button as={Link} to="/signup" colorScheme="teal" variant="solid">Sign Up</Button>
      </Flex>
    </Box>
  );
};

export default Navbar;