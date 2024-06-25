import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Tech Forum</Heading>
        <Text fontSize="lg">Join the discussion on the latest in tech.</Text>
        <Button as={Link} to="/forum" colorScheme="teal" size="lg">Enter Forum</Button>
      </VStack>
    </Container>
  );
};

export default Index;