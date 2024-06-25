import { Box, Heading, Text, VStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CreatePostForm from "../components/CreatePostForm";
import { useState } from "react";

const Forum = () => {
  const [posts, setPosts] = useState([]);

  const handleNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Tech Forum</Heading>
      <CreatePostForm onPostCreated={handleNewPost} />
      <VStack spacing={4} align="stretch" mt={6}>
        {posts.map((post, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px">
            <Heading as="h3" size="md">{post.title}</Heading>
            <Text mt={2}>{post.content}</Text>
          </Box>
        ))}
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">General Discussion</Heading>
          <Text mt={2}>Talk about anything tech-related.</Text>
          <ChakraLink as={Link} to="/forum/general" color="teal.500" mt={2}>Enter</ChakraLink>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Software Development</Heading>
          <Text mt={2}>Discuss software development topics.</Text>
          <ChakraLink as={Link} to="/forum/software" color="teal.500" mt={2}>Enter</ChakraLink>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px">
          <Heading as="h2" size="md">Hardware</Heading>
          <Text mt={2}>Talk about the latest in hardware.</Text>
          <ChakraLink as={Link} to="/forum/hardware" color="teal.500" mt={2}>Enter</ChakraLink>
        </Box>
      </VStack>
    </Box>
  );
};

export default Forum;