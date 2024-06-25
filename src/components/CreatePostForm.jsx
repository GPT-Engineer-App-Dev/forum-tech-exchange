import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";
import { createPost } from '../services/api';

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Title and content are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await createPost({ title, content });
      toast({
        title: "Success",
        description: "Post created successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setTitle('');
      setContent('');
      if (onPostCreated) onPostCreated(result.post);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create post",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit} width="100%" maxWidth="500px" margin="auto">
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
            rows={6}
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={isSubmitting} loadingText="Submitting">
          Create Post
        </Button>
      </VStack>
    </Box>
  );
};

export default CreatePostForm;