import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Sign Up</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full">Sign Up</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Signup;