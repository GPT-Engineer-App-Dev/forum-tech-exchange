import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack } from "@chakra-ui/react";

const Login = () => {
  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Button colorScheme="teal" size="lg" width="full">Login</Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;