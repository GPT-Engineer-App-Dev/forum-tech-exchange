import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, VStack, Text, useToast } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    setIsLoading(true);
    // Here you would typically make an API call to authenticate the user
    // For this example, we'll just simulate a successful login
    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");
      toast({
        title: "Login successful",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container centerContent>
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Heading as="h1" size="lg">Login</Heading>
            {error && <Text color="red.500">{error}</Text>}
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button 
              colorScheme="teal" 
              size="lg" 
              width="full" 
              type="submit"
              isLoading={isLoading}
            >
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Login;